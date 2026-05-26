const EMAILS = [
  {
    id: 'e1', isPhishing: true,
    from: 'PayPal Security', email: 'security@paypa1-alerts.com',
    subject: '⚠️ Your account has been limited!',
    time: 'Today, 9:14 AM',
    body: `Dear Customer,<br><br>We have detected <strong>unusual activity</strong> on your PayPal account. Your account has been <strong>temporarily limited</strong>.<br><br>To restore full access, please verify your information within <span class="highlight">24 hours</span> or your account will be permanently suspended.<br><br><a href="#">Click here to verify your account →</a><br><br>PayPal Security Team`,
    clues: ['Sender domain is "paypa1-alerts.com" — not paypal.com', 'Generic greeting "Dear Customer" instead of your name', 'Artificial urgency: "24 hours or permanently suspended"', 'Suspicious link that doesn\'t go to paypal.com']
  },
  {
    id: 'e2', isPhishing: false,
    from: 'GitHub', email: 'noreply@github.com',
    subject: '[GitHub] Please verify your email address',
    time: 'Today, 10:02 AM',
    body: `Hi zoya-nayab,<br><br>We received a request to verify the email address associated with your GitHub account.<br><br>Please click the button below to confirm your address. This link will expire in 72 hours.<br><br><a href="#">Verify email address →</a><br><br>If you did not request this, you can safely ignore this email.<br><br>— The GitHub Team`,
    clues: ['Sender is noreply@github.com — official domain', 'Addresses you by your actual username', 'No urgency or threats — "you can safely ignore"', 'Standard verification email with reasonable expiry']
  },
  {
    id: 'e3', isPhishing: true,
    from: 'IT Support Desk', email: 'it.support@company-helpdesk.net',
    subject: 'Action Required: Reset your password NOW',
    time: 'Yesterday, 4:47 PM',
    body: `Dear Employee,<br><br>Our security system has flagged your account for a <strong>mandatory password reset</strong>. Failure to reset within <span class="highlight">2 hours</span> will result in account lockout.<br><br>Please provide your <strong>current username and password</strong> by replying to this email so we can process the reset manually.<br><br><a href="#">Or click here to reset immediately →</a><br><br>IT Support`,
    clues: ['Real IT support NEVER asks for your password via email', 'Domain is "company-helpdesk.net" — not an internal company domain', 'Extreme urgency: "2 hours or lockout"', 'Asking you to reply with credentials is a major red flag']
  },
  {
    id: 'e4', isPhishing: false,
    from: 'Google', email: 'no-reply@accounts.google.com',
    subject: 'New sign-in on Windows',
    time: 'Yesterday, 11:30 AM',
    body: `Hi Zoya,<br><br>Your Google Account was just signed in to on a Windows device.<br><br><strong>Time:</strong> Monday, Apr 14, 10:58 AM PKT<br><strong>Location:</strong> Karachi, Pakistan<br><br>If this was you, you don't need to do anything. If you don't recognize this sign-in, review your account activity.<br><br><a href="#">Review activity →</a><br><br>The Google Accounts Team`,
    clues: ['Sender is accounts.google.com — official domain', 'Addresses you by name with specific details', 'No threats — "if this was you, no action needed"', 'Provides specific location and time for verification']
  },
  {
    id: 'e5', isPhishing: true,
    from: 'Netflix Billing', email: 'billing@netflix-payment-update.com',
    subject: 'Your payment failed — update now to avoid cancellation',
    time: '2 days ago',
    body: `Dear Netflix Member,<br><br>We were unable to process your last payment. Your subscription will be <strong>cancelled within 48 hours</strong> unless you update your billing information.<br><br><a href="#">Update Payment Info →</a><br><br>Note: Ignoring this email will result in permanent account deletion.<br><br>Netflix Billing Department`,
    clues: ['Domain "netflix-payment-update.com" is NOT netflix.com', 'Classic fear tactic: "permanent account deletion"', 'Netflix emails always come from @netflix.com', 'The link does not lead to netflix.com']
  },
  {
    id: 'e6', isPhishing: false,
    from: 'LinkedIn', email: 'messages-noreply@linkedin.com',
    subject: 'You have 3 new connection requests',
    time: '3 days ago',
    body: `Hi Zoya,<br><br>You have <strong>3 new connection requests</strong> waiting for you on LinkedIn.<br><br><a href="#">View connection requests →</a><br><br>You're receiving this email because you have connection request notifications turned on.<br><br>— The LinkedIn Team`,
    clues: ['Sender is messages-noreply@linkedin.com — official domain', 'No urgency, no threats, no credential requests', 'Standard notification — easy to verify by logging in directly', 'Includes notification preference context']
  }
];

let scores = { correct: 0, wrong: 0 };

function initSim() {
  requireLogin();
  renderEmails();
}

function renderEmails() {
  scores = { correct: 0, wrong: 0 };
  updateScore();
  document.getElementById('emailsArea').innerHTML = EMAILS.map(e => `
    <div class="email-card" id="card-${e.id}">
      <div class="email-header">
        <div class="email-from">
          <div class="avatar ${e.isPhishing ? 'red' : 'blue'}">${e.from[0]}</div>
          <div class="from-info">
            <div class="from-name">${e.from}</div>
            <div class="from-email">${e.email}</div>
          </div>
          <div class="email-time">${e.time}</div>
        </div>
        <div class="email-subject">${e.subject}</div>
      </div>
      <div class="email-body">${e.body}</div>
      <div class="result-overlay" id="res-${e.id}"></div>
      <div class="email-actions" id="act-${e.id}">
        <span class="action-label">Your verdict:</span>
        <button class="btn-safe" onclick="judge('${e.id}', false)">✅ Safe Email</button>
        <button class="btn-phish" onclick="judge('${e.id}', true)">🚨 Phishing!</button>
      </div>
    </div>`).join('');
}

function judge(id, guessPhishing) {
  const email = EMAILS.find(e => e.id === id);
  const correct = guessPhishing === email.isPhishing;
  if (correct) scores.correct++; else scores.wrong++;

  const res = document.getElementById('res-' + id);
  res.className = 'result-overlay show ' + (correct ? 'correct' : 'wrong');
  res.innerHTML = (correct ? '✓ Correct! ' : '✗ Wrong! ') +
    (email.isPhishing ? 'This WAS a phishing email.' : 'This was a legitimate email.') +
    '<ul class="clue-list">' + email.clues.map(c => `<li>${c}</li>`).join('') + '</ul>';

  document.getElementById('act-' + id).innerHTML =
    `<span style="font-size:13px;color:${correct ? '#66bb6a' : '#ef5350'};padding:8px 0;display:block">
      ${correct ? '✓ Correct answer!' : '✗ Incorrect answer'}
    </span>`;
  document.getElementById('card-' + id).classList.add('answered');

  updateScore();

  if (scores.correct + scores.wrong === EMAILS.length) {
    const user = getCurrentUser();
    if (user) {
      user.score = (user.score || 0) + scores.correct * 50;
      if (!user.badges.includes('sim_expert') && scores.correct >= 5) {
        user.badges.push('sim_expert');
      }
      saveUser(user);
    }
    setTimeout(showFinal, 600);
  }
}

function updateScore() {
  document.getElementById('scoreVal').textContent = scores.correct * 50;
  document.getElementById('correctVal').textContent = scores.correct;
  document.getElementById('wrongVal').textContent = scores.wrong;
  document.getElementById('remainVal').textContent = EMAILS.length - scores.correct - scores.wrong;
}

function showFinal() {
  const pct = Math.round((scores.correct / EMAILS.length) * 100);
  const icon = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📖';
  const msg = pct >= 80 ? "Outstanding! You're a phishing expert." : pct >= 60 ? 'Good job! A bit more practice and you\'ll be an expert.' : 'Keep studying the lessons — phishing can be tricky!';
  document.getElementById('emailsArea').innerHTML += `
    <div class="final-card">
      <div class="final-icon">${icon}</div>
      <div class="final-score">${scores.correct}/${EMAILS.length}</div>
      <div class="final-msg">${msg}</div>
      <button class="btn-restart" onclick="renderEmails()">Try Again</button>
      <a href="dashboard.html" class="btn-secondary" style="padding:12px 24px;display:inline-block">Go to Dashboard</a>
    </div>`;
}