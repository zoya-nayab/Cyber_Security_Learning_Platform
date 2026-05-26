# 🛡️ CyberShield — Cybersecurity Awareness Platform

CyberShield is a free, interactive cybersecurity awareness platform built for non-technical users — students, employees, and everyday internet users who want to protect themselves online without needing an IT background.

## 📌 About The Project

Developed as part of an Entrepreneurship course at IoBM (2025), CyberShield addresses one of the most critical problems in digital security — human error. Over 90% of cyberattacks begin with a human mistake like clicking a phishing link or using a weak password. CyberShield solves this through engaging, jargon-free education.

## ✨ Features

- 📚 **6 Security Modules** — Phishing, Password Security, Social Engineering, Malware & Ransomware, Online Privacy, and Safe Browsing
- 📝 **120+ Quiz Questions** — Randomly shuffled, 10 questions per session so every attempt is unique
- 🎯 **Phishing Simulation** — Practice spotting real phishing emails in a safe environment
- 🔒 **Password Strength Checker** — Instant feedback on password security
- 📊 **Personal Dashboard** — Track progress, scores, badges and risk level across all modules
- 🏅 **Badge System** — Earn badges for completing each module

## 🚀 Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- No frameworks, no backend, no dependencies
- Runs entirely in the browser using localStorage

## 💡 Business Vision

CyberShield is designed with a freemium model — free for all individual users with a proposed roadmap including university licensing, B2B corporate training packages, and completion certification programs.

## 🎓 Academic Context

| Field | Detail |
|-------|--------|
| Institution | IoBM — Institute of Business Management, Karachi |
| Course | Entrepreneurship |
| Semester | 6th Semester, Software Engineering |
| Year | 2025 |

## ⚙️ How To Run

```bash
1. Clone or download the repository
2. Open index.html in any browser
3. Or use VS Code Live Server for best experience
```

## 📁 Project Structure
cybersec-platform/
├── index.html              # Landing page
├── login.html              # Login & signup
├── lessons.html            # Security lessons
├── quiz.html               # Interactive quiz
├── simulation.html         # Phishing simulation
├── dashboard.html          # User progress dashboard
├── password-checker.html   # Password strength tool
├── phish-trap.html         # Phishing trap page
├── admin.html              # Admin panel
├── css/
│   └── style.css           # Global styles
└── js/
├── auth.js             # Authentication logic
├── lessons.js          # Lessons data & rendering
├── quiz.js             # Quiz engine & questions
├── dashboard.js        # Dashboard logic
├── simulation.js       # Simulation logic
├── password-checker.js # Password checker logic
└── admin.js            # Admin panel logic

## 📌 Note

This is a frontend-only academic project. All data is stored in browser localStorage and resets if browser storage is cleared. Backend integration is part of the proposed future roadmap.
