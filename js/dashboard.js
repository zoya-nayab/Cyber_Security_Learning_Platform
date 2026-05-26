// ===============================
// 🧠 QUIZ REPORT (SAFE GLOBAL LOAD)
// ===============================
let quizReport = null;

try {
  const stored = localStorage.getItem("quizReport");
  quizReport = stored ? JSON.parse(stored) : null;
} catch (e) {
  quizReport = null;
}

// ===============================
// 📊 DASHBOARD INITIALIZATION
// ===============================
function loadDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const report = quizReport;

  // -------------------------------
  // 👋 WELCOME
  // -------------------------------
  document.getElementById('welcomeText').textContent =
    'Welcome back, ' + user.name + ' 👋';

  // -------------------------------
  // ⭐ SCORE DISPLAY
  // -------------------------------
  const scoreEl = document.getElementById('score');

  if (report) {
    scoreEl.textContent =
      `${report.accuracy}% (${report.correct}/${report.totalQuestions})`;
  } else {
    scoreEl.textContent = user.score || 0;
  }

  document.getElementById('badgeCount').textContent =
    (user.badges || []).length;

  document.getElementById('completed').textContent =
    (user.completed || []).length;

  // -------------------------------
  // 📈 MODULE PROGRESS — all 6
  // -------------------------------
  const modules = [
    { id: 'phishing',      name: 'Phishing Awareness',       icon: '🎣' },
    { id: 'password',      name: 'Password Security',        icon: '🔐' },
    { id: 'social',        name: 'Social Engineering',       icon: '🧠' },
    { id: 'malware',       name: 'Malware & Ransomware',     icon: '🦠' },
    { id: 'privacy',       name: 'Online Privacy',           icon: '👁️' },
    { id: 'safe_browsing', name: 'Safe Browsing & Wi-Fi',    icon: '🌐' },
  ];

  const progressList = document.getElementById('progressList');
  progressList.innerHTML = '';

  modules.forEach(mod => {
    let pct = 0;

    if (report?.moduleStats?.[mod.id]) {
      const stat = report.moduleStats[mod.id];
      pct = Math.round((stat.correct / stat.total) * 100);
    } else if (user.completed?.includes(mod.id)) {
      pct = 100;
    } else if (user.progress?.[mod.id]) {
      pct = user.progress[mod.id];
    }

    progressList.innerHTML += `
      <div class="progress-item">
        <div class="progress-icon">${mod.icon}</div>
        <div class="progress-info">
          <div class="progress-name">${mod.name}</div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="progress-pct">${pct}%</div>
      </div>
    `;
  });

  // -------------------------------
  // 🏅 BADGES — all 6
  // -------------------------------
  const allBadges = [
    { id: 'phish_spotter', icon: '🎣', name: 'Phish Spotter' },
    { id: 'key_guardian',  icon: '🔐', name: 'Key Guardian'  },
    { id: 'mind_shield',   icon: '🧠', name: 'Mind Shield'   },
    { id: 'virus_hunter',  icon: '🦠', name: 'Virus Hunter'  },
    { id: 'privacy_pro',   icon: '👁️', name: 'Privacy Pro'   },
    { id: 'net_navigator', icon: '🌐', name: 'Net Navigator' },
    { id: 'sim_expert',    icon: '🎯', name: 'Sim Expert'    },
    { id: 'cyber_pro',     icon: '🏆', name: 'Cyber Pro'     },
  ];

  const earned = user.badges || [];
  const badgesGrid = document.getElementById('badgesGrid');
  badgesGrid.innerHTML = '';

  allBadges.forEach(b => {
    const unlocked = earned.includes(b.id);
    badgesGrid.innerHTML += `
      <div class="badge ${unlocked ? '' : 'locked'}">
        <div class="badge-icon">${b.icon}</div>
        <div class="badge-name">${b.name}</div>
      </div>
    `;
  });

  // -------------------------------
  // 🧠 INSIGHTS + RISK ANALYSIS
  // -------------------------------
  if (report) {
    let insight = "";
    let riskLevel = "LOW";

    if (report.accuracy >= 80) {
      insight = "🟢 Strong cybersecurity understanding.";
      riskLevel = "LOW";
    } else if (report.accuracy >= 60) {
      insight = "🟡 Moderate awareness with weak areas.";
      riskLevel = "MEDIUM";
    } else {
      insight = "🔴 High cybersecurity risk detected.";
      riskLevel = "HIGH";
    }

    if (report.weakAreas?.includes("phishing"))      insight += " Phishing needs improvement.";
    if (report.weakAreas?.includes("password"))      insight += " Password security needs improvement.";
    if (report.weakAreas?.includes("social"))        insight += " Social engineering needs improvement.";
    if (report.weakAreas?.includes("malware"))       insight += " Malware awareness needs improvement.";
    if (report.weakAreas?.includes("privacy"))       insight += " Online privacy needs improvement.";
    if (report.weakAreas?.includes("safe_browsing")) insight += " Safe browsing needs improvement.";

    const dashboard = document.querySelector(".dashboard");

    const insightEl = document.createElement("p");
    insightEl.style.marginTop = "20px";
    insightEl.style.color = "#4fc3f7";
    insightEl.style.fontSize = "14px";
    insightEl.style.lineHeight = "1.6";
    insightEl.textContent = insight;

    const riskBox = document.createElement("div");
    riskBox.style.marginTop = "10px";
    riskBox.style.padding = "10px";
    riskBox.style.border = "1px solid #1e2d50";
    riskBox.style.borderRadius = "8px";
    riskBox.style.color =
      riskLevel === "HIGH"   ? "#ff5252" :
      riskLevel === "MEDIUM" ? "#ffb74d" : "#66bb6a";
    riskBox.textContent = "🛡 Security Risk Level: " + riskLevel;

    dashboard.appendChild(insightEl);
    dashboard.appendChild(riskBox);
  }

  // -------------------------------
  // ⚠ WEAK AREAS
  // -------------------------------
  if (report?.weakAreas?.length) {
    const weakEl = document.createElement("p");
    weakEl.style.color = "#ff6b6b";
    weakEl.style.marginTop = "20px";
    weakEl.textContent = "⚠ Weak Areas Detected: " + report.weakAreas.join(", ");
    document.querySelector(".dashboard").appendChild(weakEl);
  }
}