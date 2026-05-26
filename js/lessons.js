// ============================================================
//  CyberShield — lessons.js  (Enhanced: 6 topics, rich content)
// ============================================================

const LESSONS = [
  {
    id: 'phishing',
    num: '01',
    icon: '🎣',
    title: 'Phishing Awareness',
    subtitle: 'Recognize fake emails, suspicious links, and spoofed sites',
    badge: 'phish_spotter',
    intro: `Phishing is one of the most common cyber-attacks in the world. Criminals send fake emails, SMS messages, or create fake websites that look exactly like real ones — all to trick you into handing over passwords, bank details, or personal information. You don't need to be "tech-savvy" to fall victim; these attacks are designed to fool everyone.`,
    whatItMeans: `Think of phishing like a fisherman casting a net — they send out thousands of fake messages hoping someone bites. When you click a link in a phishing email, you're often taken to a fake website (called a "spoofed site") that looks identical to your bank or social media. Whatever you type there goes straight to the attacker.`,
    sectionTitle: '🚩 Red Flags to Watch For',
    tips: [
      'Urgent or threatening language — "Your account will be suspended in 24 hours! Act now!"',
      'Sender email doesn\'t match the official domain — e.g. support@paypa1.com instead of support@paypal.com',
      'Links that show one address but go to a completely different website when you hover over them',
      'Generic greetings like "Dear Customer" or "Dear User" instead of your actual name',
      'Unexpected attachments — especially files ending in .exe, .zip, or .docm',
      'Requests to "verify" your account, password, or payment info by clicking a link',
      'Poor spelling, grammar, or unusual formatting — real companies proofread their emails',
      'Logos or images that look slightly off, pixelated, or stretched'
    ],
    realWorldExample: `Real example: You get an email that says "Your Netflix account has been suspended due to a payment issue. Click here to update your billing info." The email looks real, has the Netflix logo, and the link says "netflix-billing-update.com" — not the real netflix.com. Thousands of people enter their credit card details on that fake page every day.`,
    howToProtect: [
      'Always go directly to a website by typing the address in your browser — don\'t click links in emails',
      'Hover over links before clicking to see the real destination URL',
      'When in doubt, call the company directly using a number from their official website',
      'Enable spam filters on your email account',
      'Report suspicious emails to your IT department or email provider'
    ]
  },

  {
    id: 'password',
    num: '02',
    icon: '🔐',
    title: 'Password Security',
    subtitle: 'Build strong passwords and manage credentials safely',
    badge: 'key_guardian',
    intro: `Your password is the first line of defence for every account you own. Weak or reused passwords are one of the top reasons people get hacked — not because of complicated technical attacks, but simply because attackers guess or steal your password and then use it on every other site you use.`,
    whatItMeans: `A strong password works like a complex lock. If every lock you own uses the same simple key (e.g. "password123"), a thief who gets that key can open everything. But if each lock uses a different complex key, stealing one doesn't help them with the others. That's why unique, complex passwords for every account matter so much.`,
    sectionTitle: '✅ Best Practices Everyone Should Follow',
    tips: [
      'Use at least 12–16 characters — the longer, the better',
      'Mix uppercase letters, lowercase letters, numbers, and symbols (e.g. P@ssw0rd! is weak but "G#7kRm!2xLqT" is strong)',
      'Never use personal info — no birthdays, pet names, or your own name',
      'Never reuse the same password on multiple websites',
      'Enable Two-Factor Authentication (2FA) — this sends a code to your phone when you log in, so even if someone steals your password, they still can\'t get in',
      'Use a password manager like Bitwarden (free) or 1Password to securely store all your passwords — you only need to remember ONE master password',
      'Never share passwords via email, SMS, WhatsApp, or any chat',
      'Change your passwords immediately if you hear that a website you use has been hacked'
    ],
    realWorldExample: `Real example: In 2019, a major data breach exposed millions of passwords. Attackers then tried those exact email+password combinations on Gmail, Facebook, and online banking. People who used the same password everywhere found multiple accounts compromised. People with unique passwords for each site were completely safe.`,
    howToProtect: [
      'Install a free password manager like Bitwarden — it creates and remembers complex passwords for you',
      'Turn on 2FA for your email, social media, and banking accounts today',
      'Check if your email has been in a data breach at haveibeenpwned.com',
      'Never let a colleague, family member, or "IT support" person know your password',
      'Use a passphrase for easy-to-remember strong passwords: "Coffee!Rainbow7Bridge#Sky" is long and easy to recall'
    ]
  },

  {
    id: 'social',
    num: '03',
    icon: '🧠',
    title: 'Social Engineering',
    subtitle: 'Understand psychological manipulation tactics used by attackers',
    badge: 'mind_shield',
    intro: `Social engineering is the art of manipulating people into giving up confidential information or doing something that compromises security — without any computer hacking at all. It works by exploiting basic human psychology: our desire to be helpful, our tendency to trust authority, and our fear of consequences.`,
    whatItMeans: `Imagine someone calls you claiming to be from your bank's fraud department. They say there's suspicious activity on your account and they need to "verify" your identity by asking for your card number and PIN. This is social engineering — no hacking needed. They just convinced you to hand over your details willingly.`,
    sectionTitle: '🎭 Common Social Engineering Techniques',
    tips: [
      'Pretexting — attacker creates a believable fake scenario ("I\'m from IT, we need your login to fix a server issue")',
      'Baiting — leaving infected USB drives labeled "Salary List 2024" in public places, knowing curiosity will make someone plug it in',
      'Tailgating — physically following an employee through a secured door by pretending to have their hands full',
      'Vishing (Voice Phishing) — phone calls impersonating banks, government agencies, or IT support to extract info',
      'Quid Pro Quo — offering something (free IT help, a gift) in exchange for your login credentials',
      'Impersonation — dressing as a delivery person, maintenance worker, or auditor to gain physical access',
      'Scareware — fake pop-ups claiming "Your computer has a virus! Call this number NOW!" to trick you into paying for fake support'
    ],
    realWorldExample: `Real example: An attacker calls an employee saying "Hi, this is Mike from IT. We detected a security threat on your account. I need you to log into this link and reset your password right now or your access will be revoked." The employee panics, clicks the link (a fake login page), and enters their real credentials — which the attacker now has.`,
    howToProtect: [
      'Verify before you trust — always call back on an official number if someone unexpected contacts you',
      'Legitimate IT staff, banks, and government agencies will NEVER ask for your password',
      'If you feel pressured or rushed, that\'s a red flag — take a breath and verify first',
      'Question anyone you don\'t recognize who wants access to your workspace or systems',
      'When in doubt, escalate to your supervisor or IT department rather than comply'
    ]
  },

  {
    id: 'malware',
    num: '04',
    icon: '🦠',
    title: 'Malware & Ransomware',
    subtitle: 'Understand how malicious software works and how to stay safe',
    badge: 'virus_hunter',
    intro: `Malware (malicious software) is any program designed to damage, disrupt, or gain unauthorized access to your computer. Ransomware is a especially dangerous type that locks all your files and demands payment to unlock them. These threats affect individuals, hospitals, schools, and major corporations every single day.`,
    whatItMeans: `Think of malware like a burglar sneaking into your house while you're asleep. Once inside, they can steal your documents, watch what you're doing, or lock all your cabinets and demand a ransom for the key. You often won't even know they're there until the damage is already done. Ransomware attacks have shut down entire hospitals and cost companies millions.`,
    sectionTitle: '🦠 Types of Malware You Should Know',
    tips: [
      'Virus — attaches itself to files and spreads when you share or open them',
      'Ransomware — encrypts all your files and demands payment (usually in cryptocurrency) to restore access',
      'Spyware — silently monitors your activity, keystrokes, and passwords without your knowledge',
      'Trojan — disguised as a legitimate program (like a free game or tool) but carries malicious code',
      'Adware — bombards you with aggressive ads and can slow down or crash your computer',
      'Rootkit — hides deep in your system and gives attackers remote control of your computer',
      'Worm — self-replicates and spreads across networks without you doing anything'
    ],
    realWorldExample: `Real example: The WannaCry ransomware attack in 2017 infected over 200,000 computers in 150 countries in a single day. It locked files on NHS hospital computers in the UK, forcing doctors to cancel appointments and turn away patients — all because a few computers hadn't installed a security update.`,
    howToProtect: [
      'Keep your operating system and all software updated — updates often fix security holes malware exploits',
      'Install a reputable antivirus program and keep it updated (Windows Defender is free and good)',
      'Never download software from unofficial or unknown websites',
      'Don\'t plug in USB drives you found or received unexpectedly',
      'Back up your important files regularly — to an external hard drive or cloud storage — so ransomware can\'t hold you hostage',
      'Be very cautious with email attachments, even from people you know (their account may be hacked)'
    ]
  },

  {
    id: 'privacy',
    num: '05',
    icon: '👁️',
    title: 'Online Privacy & Data Safety',
    subtitle: 'Protect your personal information in the digital world',
    badge: 'privacy_pro',
    intro: `Every time you go online, you leave a trail of personal data — what you search, what you buy, where you are, and who you talk to. While some data collection is normal, much of it is used to build profiles about you that can be sold, stolen, or exploited. Understanding online privacy means you stay in control of your own information.`,
    whatItMeans: `Your data is valuable — more valuable than oil, according to many economists. Companies collect it to sell ads. Hackers steal it to commit fraud or sell it on the dark web. Scammers use it to target you with convincing attacks. Protecting your privacy isn't about hiding — it's about making sure your personal information doesn't end up in the wrong hands.`,
    sectionTitle: '🔍 Privacy Risks You Face Every Day',
    tips: [
      'Oversharing on social media — posting your location, workplace, or daily routine helps attackers build a profile on you',
      'Public Wi-Fi risks — unsecured hotspots at cafes or airports can allow others to intercept what you\'re doing online',
      'Browser tracking — websites use "cookies" and trackers to follow you across the internet and build advertising profiles',
      'Data broker sites — companies legally collect and sell your personal info (name, address, phone) to anyone who pays',
      'App permissions — many apps request access to your camera, microphone, contacts, and location even when they don\'t need it',
      'Old accounts — accounts on services you no longer use still hold your data and can be breached',
      'Smart devices — smart TVs, speakers, and home assistants constantly collect data about your habits and conversations'
    ],
    realWorldExample: `Real example: A woman posted a photo of her new house keys on Instagram, excited about moving in. Within hours, someone had used the photo to create duplicate keys. Always think before you post — information that seems harmless can be very dangerous in the wrong hands.`,
    howToProtect: [
      'Use a VPN (Virtual Private Network) when on public Wi-Fi — it encrypts your connection',
      'Review app permissions on your phone — does a flashlight app really need your microphone?',
      'Use a privacy-focused browser like Firefox or Brave, and install an ad/tracker blocker like uBlock Origin',
      'Set your social media profiles to "Friends Only" and avoid posting your location in real-time',
      'Regularly delete unused accounts and apps',
      'Use a separate email address for online shopping and newsletters to protect your main inbox',
      'Read privacy policies (or at least check what data an app collects before installing it)'
    ]
  },

  {
    id: 'safe_browsing',
    num: '06',
    icon: '🌐',
    title: 'Safe Browsing & Public Wi-Fi',
    subtitle: 'Browse securely and stay protected on any network',
    badge: 'net_navigator',
    intro: `Every website you visit, every network you connect to, and every link you click is an opportunity for something to go wrong — or go right, if you know what to look for. Safe browsing habits protect you from scams, malware, and data theft without requiring any technical knowledge — just awareness.`,
    whatItMeans: `Using the internet unsafely is like leaving your car doors unlocked in a busy city. Most of the time nothing happens. But it only takes one instance for something to go very wrong. Simple habits — like checking for HTTPS, avoiding suspicious links, and being careful on public Wi-Fi — dramatically reduce your risk with almost no effort.`,
    sectionTitle: '🌐 Safe Browsing Rules to Live By',
    tips: [
      'Always check for HTTPS (the padlock icon in your browser) before entering any personal information on a website',
      'Be very wary of websites offering things that seem too good to be true — free software, gift cards, prizes',
      'Pop-ups saying "Your computer is infected!" or "You\'ve won an iPhone!" are almost always scams — close them immediately',
      'Never enter passwords or payment info on a public computer (library, hotel, internet cafe)',
      'On public Wi-Fi, avoid logging into banking or sensitive accounts — use mobile data instead if possible',
      'Keep your browser updated — outdated browsers have security vulnerabilities attackers exploit',
      'Be careful of "typosquatting" — websites like "gooogle.com" or "facbook.com" that look like real sites but aren\'t',
      'Don\'t click "Allow" on browser notification pop-ups from websites you don\'t fully trust'
    ],
    realWorldExample: `Real example: A traveler connected to "Free_Airport_WiFi" at an international airport. What they didn't know was that an attacker had set up that hotspot themselves. Every website the traveler visited, including their bank, was visible to the attacker — who quietly captured their login credentials.`,
    howToProtect: [
      'Use a VPN app on your phone and laptop when connecting to public Wi-Fi',
      'Enable "HTTPS-Only Mode" in your browser settings',
      'Use a DNS filtering service like Cloudflare (1.1.1.1) which blocks known malicious websites automatically',
      'Install browser extensions like uBlock Origin (blocks ads and malicious scripts)',
      'Confirm the exact Wi-Fi network name with staff before connecting in public places',
      'Log out of websites when you\'re done, especially on shared devices',
      'Check the URL bar carefully every time you enter a password — make sure it\'s the real website'
    ]
  }
];

// ============================================================
//  Render Functions
// ============================================================

function initLessons() {
  requireLogin();
  const user = getCurrentUser();
  const completed = user ? (user.completed || []) : [];
  const wrap = document.getElementById('lessonsWrap');

  wrap.innerHTML = LESSONS.map(lesson => {
    const isDone = completed.includes(lesson.id);
    const badgeHTML = isDone
      ? '<span class="badge-pill badge-done">✓ Complete</span>'
      : '<span class="badge-pill badge-new">New</span>';

    const protectHTML = lesson.howToProtect
      ? `<div class="lesson-section">
           <h4>🛡️ How to Protect Yourself</h4>
           <ul class="tip-list">
             ${lesson.howToProtect.map(t => `<li>${t}</li>`).join('')}
           </ul>
         </div>`
      : '';

    const exampleHTML = lesson.realWorldExample
      ? `<div class="lesson-section example-box">
           <h4>📌 Real-World Example</h4>
           <p>${lesson.realWorldExample}</p>
         </div>`
      : '';

    const explainerHTML = lesson.whatItMeans
      ? `<div class="lesson-section">
           <h4>💡 What This Means in Simple Terms</h4>
           <p>${lesson.whatItMeans}</p>
         </div>`
      : '';

    return `
      <div class="lesson-card" id="card-${lesson.id}">
        <div class="lesson-header" onclick="toggleLesson('${lesson.id}')">
          <div class="lesson-num">${lesson.num}</div>
          <div class="lesson-meta">
            <h3>${lesson.icon} ${lesson.title}</h3>
            <p>${lesson.subtitle}</p>
          </div>
          <div class="lesson-right">
            <span id="badge-${lesson.id}">${badgeHTML}</span>
            <span class="chevron" id="chev-${lesson.id}">▾</span>
          </div>
        </div>
        <div class="lesson-body" id="body-${lesson.id}">
          <hr class="divider">
          <div class="lesson-section">
            <h4>📖 Overview</h4>
            <p>${lesson.intro}</p>
          </div>
          ${explainerHTML}
          <div class="lesson-section">
            <h4>${lesson.sectionTitle}</h4>
            <ul class="tip-list">
              ${lesson.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
          ${exampleHTML}
          ${protectHTML}
          <div class="lesson-actions">
            <button class="btn-lesson btn-complete" onclick="completeLesson('${lesson.id}', '${lesson.badge}')">
              ${isDone ? '✓ Completed' : 'Mark Complete'}
            </button>
            <a href="quiz.html?module=${lesson.id}" class="btn-lesson btn-quiz">Take Quiz →</a>
          </div>
        </div>
      </div>`;
  }).join('');
}

function toggleLesson(id) {
  const body = document.getElementById('body-' + id);
  const chev = document.getElementById('chev-' + id);
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.lesson-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.chevron').forEach(c => c.classList.remove('open'));
  if (!isOpen) {
    body.classList.add('open');
    chev.classList.add('open');
  }
}

function completeLesson(lessonId, badgeId) {
  const user = getCurrentUser();
  if (!user) return;

  if (!user.completed.includes(lessonId)) {
    user.completed.push(lessonId);
    user.score = (user.score || 0) + 100;
  }
  if (!user.badges.includes(badgeId)) {
    user.badges.push(badgeId);
  }
  saveUser(user);

  document.getElementById('badge-' + lessonId).innerHTML =
    '<span class="badge-pill badge-done">✓ Complete</span>';
  const btn = document.querySelector(`#card-${lessonId} .btn-complete`);
  if (btn) {
    btn.textContent = '✓ Completed';
    btn.style.background = '#0d2d1a';
    btn.style.color = '#66bb6a';
  }
}