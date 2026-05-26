// ============================================================
//  CyberShield — quiz.js  (Enhanced: 100 Qs, random shuffle)
//  Each quiz session picks QUESTIONS_PER_QUIZ questions at
//  random from the selected module's pool of 20.
// ============================================================

const QUESTIONS_PER_QUIZ = 10; // Change to 5 if you want shorter quizzes

const ALL_QUESTIONS = {

  // ──────────────────────────────────────────────────────────
  //  MODULE 1 — PHISHING (20 questions)
  // ──────────────────────────────────────────────────────────
  phishing: [
    {
      q: "Which of these is the most common sign of a phishing email?",
      options: ["Personalized greeting with your full name", "Urgent language threatening account suspension", "Email sent from an official company domain", "Well-formatted HTML with correct branding"],
      correct: 1,
      explanation: "Urgency is the #1 phishing tactic — it pressures you to act before you think clearly."
    },
    {
      q: "You receive an email from 'support@paypa1.com' about your PayPal account. What do you do?",
      options: ["Reply with your password to verify", "Click the link to check your account", "Examine the domain — 'paypa1' is NOT PayPal", "Forward it to friends as a warning"],
      correct: 2,
      explanation: "Attackers use lookalike domains (paypa1 vs paypal). Always read the sender's full email address carefully."
    },
    {
      q: "What does a 'spoofed website' mean?",
      options: ["A website with very slow loading speed", "A fake site designed to look exactly like a real one", "A site blocked by your internet provider", "A website with an expired SSL certificate"],
      correct: 1,
      explanation: "Spoofed websites are pixel-perfect copies of real sites designed to steal your login credentials."
    },
    {
      q: "Which email attachment is MOST dangerous to open from an unknown sender?",
      options: [".pdf", ".txt", ".exe", ".jpg"],
      correct: 2,
      explanation: ".exe files are executable programs — opening one can immediately install malware on your system."
    },
    {
      q: "What is 'spear phishing'?",
      options: ["Phishing sent to a large random group", "A targeted attack on a specific person or organization using personal info", "Phishing via SMS messages only", "Phishing using automated voice calls"],
      correct: 1,
      explanation: "Spear phishing is highly personal — attackers research you on LinkedIn, Facebook, etc., to craft convincing messages."
    },
    {
      q: "An email says 'Your bank account has been compromised. Click here IMMEDIATELY.' What should you do?",
      options: ["Click the link right away to protect your account", "Call your bank directly using the number on their official website", "Reply to the email asking for more details", "Forward the email to your bank"],
      correct: 1,
      explanation: "Always contact your bank directly using a verified number. Never use contact details provided in a suspicious email."
    },
    {
      q: "What is 'smishing'?",
      options: ["Phishing via email", "Phishing via fake social media profiles", "Phishing via SMS text messages", "Phishing via phone calls"],
      correct: 2,
      explanation: "Smishing = SMS + phishing. Attackers send fake text messages claiming to be your bank, delivery service, or government agency."
    },
    {
      q: "You hover over a link in an email that says 'Click here to login to Netflix'. The actual URL shown is 'netflix-login.secureupdate.xyz'. What does this mean?",
      options: ["It's a secure Netflix subdomain", "The link is suspicious — real Netflix URLs always use netflix.com", "It means your connection is encrypted", "It's normal for links to redirect through other domains"],
      correct: 1,
      explanation: "Legitimate Netflix links always use the netflix.com domain. Any other domain is a red flag."
    },
    {
      q: "Which of these email subjects is MOST likely to be phishing?",
      options: ["Your monthly newsletter from TechCorp", "ACTION REQUIRED: Verify your account within 24 hours or it will be deleted", "Receipt for your recent purchase #44521", "Welcome to our community newsletter"],
      correct: 1,
      explanation: "Extreme urgency with a deadline is a classic phishing trigger to prevent you from thinking rationally."
    },
    {
      q: "A phishing email asks you to 'confirm your identity' by entering your social security number. What should you do?",
      options: ["Enter it to protect your account", "Enter only the last 4 digits", "Delete the email and report it as phishing", "Call the sender to verify"],
      correct: 2,
      explanation: "No legitimate company will ever ask for your full SSN, password, or sensitive data via email."
    },
    {
      q: "What does 'whaling' mean in cybersecurity?",
      options: ["Phishing attacks on very large databases", "Phishing specifically targeting senior executives or CEOs", "Using large-scale spam campaigns", "Hacking into government whale research databases"],
      correct: 1,
      explanation: "Whaling targets 'big fish' — CEOs, directors, and executives — using highly personalized, convincing attacks."
    },
    {
      q: "An email claims to be from your company's IT department and asks you to reset your password via a link. What's the safest action?",
      options: ["Click the link and reset immediately", "Reply asking for your IT department's employee ID", "Go directly to the official company portal and reset your password there", "Ignore it since IT never sends emails"],
      correct: 2,
      explanation: "Always navigate directly to the official site instead of using email links, even if the email looks legitimate."
    },
    {
      q: "Which is a sign that a website may be a phishing site?",
      options: ["It has a padlock icon in the browser", "The URL says 'https://www.amazon.com'", "The URL says 'https://www.amazon.com.account-verify.ru'", "It loads quickly and looks professional"],
      correct: 2,
      explanation: "The real domain is the part just before the first single slash. Here it's 'account-verify.ru', NOT amazon.com."
    },
    {
      q: "You get a call from someone claiming to be your bank, asking to confirm your card number. You should:",
      options: ["Confirm the last 4 digits only", "Ask them to call back while you verify their identity", "Hang up and call your bank using the number on the back of your card", "Comply since they already know you're a customer"],
      correct: 2,
      explanation: "Hang up and call back on a verified number. Legitimate banks don't cold-call asking for card numbers."
    },
    {
      q: "What is a 'clone phishing' attack?",
      options: ["Creating an identical copy of a person's online identity", "Copying a real, previously sent email and replacing legitimate links with malicious ones", "Duplicating a company's entire website", "Sending the same phishing email to millions at once"],
      correct: 1,
      explanation: "Clone phishing takes a real email you already received (like a shipping update) and replaces its links with malicious ones."
    },
    {
      q: "Why should you be suspicious of emails with generic greetings like 'Dear Customer'?",
      options: ["It's rude and unprofessional", "Real companies addressing you already know your name and use it", "Generic greetings increase spam scores", "All marketing emails use generic greetings"],
      correct: 1,
      explanation: "Your bank or service provider knows your name. Generic greetings often mean the attacker doesn't know who they're emailing."
    },
    {
      q: "A pop-up appears on a website saying 'Congratulations! You've won a $1000 Amazon gift card! Click here to claim!' What is this?",
      options: ["A legitimate Amazon promotion", "Scareware", "A phishing attempt / online scam", "A browser test"],
      correct: 2,
      explanation: "Fake prize pop-ups are a classic online scam. They lead to sites designed to steal your personal info or payment details."
    },
    {
      q: "Which tool helps you verify if a link is safe BEFORE you click it?",
      options: ["Google Translate", "VirusTotal.com — a free online link scanner", "Your email provider's spell checker", "Microsoft Word"],
      correct: 1,
      explanation: "VirusTotal.com lets you paste any URL and checks it against 70+ security databases to detect malicious links."
    },
    {
      q: "What is 'angler phishing'?",
      options: ["Phishing through fishing-related websites", "Attackers impersonating customer support accounts on social media to steal your info", "Sending phishing emails with fishing-themed content", "Phishing attacks that take a very long time to execute"],
      correct: 1,
      explanation: "Angler phishing targets people complaining about companies on Twitter/X — fake 'support' accounts reply offering help and steal credentials."
    },
    {
      q: "You receive an invoice by email for a $450 software subscription you never signed up for, with a phone number to 'cancel'. This is likely:",
      options: ["A legitimate billing mistake — call the number", "A refund scam — calling the number connects you to a fraudster who will try to steal from you", "A security audit test by your company", "A legitimate phishing awareness exercise"],
      correct: 1,
      explanation: "This is a classic refund scam. When you call, they ask for your bank details to 'process the refund' and steal your money instead."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  MODULE 2 — PASSWORD SECURITY (20 questions)
  // ──────────────────────────────────────────────────────────
  password: [
    {
      q: "What is the minimum recommended length for a strong password?",
      options: ["6 characters", "8 characters", "12 characters", "20 characters"],
      correct: 2,
      explanation: "Security experts recommend at least 12 characters. Longer passwords exponentially increase brute-force cracking time."
    },
    {
      q: "Which of these is the strongest password?",
      options: ["password123", "MyDog2020!", "X7#mK!9qL@2v", "IlovePizza"],
      correct: 2,
      explanation: "Random combinations of upper/lowercase letters, numbers, and symbols are far harder to crack than recognizable words."
    },
    {
      q: "What is two-factor authentication (2FA)?",
      options: ["Using two different passwords for one account", "A second verification step (like a phone code) beyond just your password", "Logging in from two different devices simultaneously", "Changing your password twice per month"],
      correct: 1,
      explanation: "2FA requires something you know (password) + something you have (phone code or app), making breaches much harder even with a stolen password."
    },
    {
      q: "Why should you NEVER reuse passwords across different websites?",
      options: ["It slows down your login speed", "If one site is breached, attackers can use that password to access all your other accounts", "Password managers don't support duplicate passwords", "It violates most websites' terms of service"],
      correct: 1,
      explanation: "Credential stuffing attacks automatically try leaked passwords on other sites. Unique passwords completely stop this attack."
    },
    {
      q: "What is a password manager?",
      options: ["A person whose job is to manage company passwords", "Software that securely generates and stores all your passwords — you only need one master password", "A browser feature that saves passwords in plain text", "A two-factor authentication application"],
      correct: 1,
      explanation: "Password managers like Bitwarden (free) or 1Password encrypt all your passwords so only you can access them."
    },
    {
      q: "A website you use announces it has been hacked. What should you do FIRST?",
      options: ["Wait for the company to fix it", "Change your password on that site immediately, and on any other site where you used the same password", "Delete your account only", "Contact the company to ask if your data was stolen before acting"],
      correct: 1,
      explanation: "Act immediately. Change the compromised password and any other accounts where you reused it. Don't wait."
    },
    {
      q: "Which of these is an example of a passphrase — a long, memorable, strong password?",
      options: ["P@ss1", "john1985", "PurpleTiger!Runs7Fast#Mountains", "QWERTY12345"],
      correct: 2,
      explanation: "Passphrases combine random words with numbers and symbols. They're long (high security) but still memorable."
    },
    {
      q: "An IT support person calls and says they need your password to fix a server issue. What do you do?",
      options: ["Give it to them — IT staff need passwords to fix things", "Give only your username, not the password", "Refuse — legitimate IT staff never need your password", "Ask them to send an email request instead"],
      correct: 2,
      explanation: "Real IT professionals never need your password. They have administrative tools. This is likely social engineering."
    },
    {
      q: "What does 'credential stuffing' mean?",
      options: ["Filling out too many login forms", "Using username/password pairs leaked from one site to try to break into other sites", "Brute-forcing a password with all possible combinations", "Stuffing malware into a login form"],
      correct: 1,
      explanation: "Billions of stolen credentials are sold online. Attackers automate trying them on every major website. Unique passwords protect you entirely."
    },
    {
      q: "Which of these makes a password WEAKER?",
      options: ["Using symbols like @ # $ %", "Using a word from the dictionary like 'sunshine'", "Making it 16 characters long", "Mixing upper and lowercase letters"],
      correct: 1,
      explanation: "Dictionary words are the first thing password-cracking tools try. They can test millions of common words per second."
    },
    {
      q: "What is a 'brute force attack' on passwords?",
      options: ["Physically breaking into a server room", "Automatically trying every possible character combination until the password is found", "Guessing passwords based on your personal info", "Breaking into password manager software"],
      correct: 1,
      explanation: "Brute force tries every combination. An 8-character simple password can be cracked in hours. A 16-character complex one takes centuries."
    },
    {
      q: "You use the same email and password for your email, Facebook, and banking. This is dangerous because:",
      options: ["It is hard to remember one password", "If any one of those services is breached, all three accounts are immediately at risk", "Email providers flag duplicate passwords as suspicious", "Banks require passwords different from your email"],
      correct: 1,
      explanation: "Password reuse is one of the most dangerous habits. One breach cascades into complete compromise of all your accounts."
    },
    {
      q: "What is the safest way to store your passwords?",
      options: ["Write them in a notebook kept near your computer", "Save them in a Word document on your desktop", "Use a reputable encrypted password manager", "Memorize all passwords"],
      correct: 2,
      explanation: "Encrypted password managers are the safest option. Notebooks and unencrypted files are easily found and read."
    },
    {
      q: "Which 2FA method is considered MOST secure?",
      options: ["SMS text message codes", "Email verification codes", "An authenticator app like Google Authenticator or Authy", "Security questions"],
      correct: 2,
      explanation: "SMS codes can be intercepted through SIM-swapping. Authenticator apps generate codes locally on your device — far more secure."
    },
    {
      q: "What is a 'dictionary attack' on passwords?",
      options: ["Hacking into dictionary websites", "Trying thousands of common words, names, and phrases as passwords", "Stealing a password dictionary from a company", "An attack that only works on passwords containing dictionary words"],
      correct: 1,
      explanation: "Attackers use lists of common words and variations. 'password', 'sunshine2024', 'qwerty' are all in these lists."
    },
    {
      q: "You want to check if your email appeared in a known data breach. Which free tool helps?",
      options: ["Google Search", "haveibeenpwned.com — a legitimate breach notification service", "Your email provider's settings", "Norton Antivirus"],
      correct: 1,
      explanation: "haveibeenpwned.com, run by security researcher Troy Hunt, lets you safely check if your email or phone appeared in public breaches."
    },
    {
      q: "How often should you change your passwords?",
      options: ["Every day", "Every month automatically", "Immediately when you suspect a breach, or when a service you use is hacked", "Every year on a set schedule regardless of breaches"],
      correct: 2,
      explanation: "Modern guidance says change passwords when breached or suspected compromised — not on a forced schedule that leads to weak predictable patterns."
    },
    {
      q: "What is 'password spraying'?",
      options: ["Spraying a keyboard with disinfectant to prevent password theft", "Trying one common password (like 'Password1') against thousands of different accounts", "Randomly generating passwords", "Distributing passwords across multiple systems"],
      correct: 1,
      explanation: "Password spraying avoids account lockouts by trying just 1–2 common passwords against many accounts. Unique complex passwords defeat it."
    },
    {
      q: "A website only requires a 4-digit PIN as your password. Why is this a major security risk?",
      options: ["PINs are hard to remember", "There are only 10,000 possible 4-digit PINs — a computer can try them all in seconds", "PINs don't work on all browsers", "4-digit PINs require more server storage"],
      correct: 1,
      explanation: "10,000 combinations sounds like a lot, but a computer can try all of them in under a second. Always demand longer passwords."
    },
    {
      q: "Which of these password practices do security experts most strongly recommend?",
      options: ["Change your password every 30 days regardless of breaches", "Use a password manager, unique passwords for every account, and enable 2FA", "Use a complex password and share it with a trusted family member as backup", "Write all passwords in an encrypted Excel file"],
      correct: 1,
      explanation: "Password manager + unique passwords + 2FA is the gold standard trifecta of password security recommended by all major security organizations."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  MODULE 3 — SOCIAL ENGINEERING (20 questions)
  // ──────────────────────────────────────────────────────────
  social: [
    {
      q: "What is 'pretexting' in social engineering?",
      options: ["Sending fake text messages to victims", "Creating a fabricated, believable scenario to manipulate someone into revealing information", "Hacking a server using fake social media accounts", "Impersonating IT staff via email only"],
      correct: 1,
      explanation: "Pretexting is essentially lying with a convincing backstory — e.g. 'I'm the new auditor and need your login to complete the security review.'"
    },
    {
      q: "An attacker leaves a USB drive labeled 'Employee Salaries 2024' in the office parking lot. This technique is called:",
      options: ["Vishing", "Tailgating", "Baiting", "Pretexting"],
      correct: 2,
      explanation: "Baiting exploits human curiosity. People plug in found drives, unknowingly installing malware that gives attackers access."
    },
    {
      q: "What is 'tailgating' (also called 'piggybacking') in physical security?",
      options: ["Following someone's social media account closely", "Physically following an authorized person through a secured door without your own access", "Sending repeated emails to overwhelm a target", "Monitoring someone's network traffic"],
      correct: 2,
      explanation: "Tailgating bypasses physical security entirely by simply walking in behind someone who has access — no hacking required."
    },
    {
      q: "Which psychological triggers do social engineers most commonly exploit?",
      options: ["Boredom and curiosity alone", "Authority (pretending to be a boss/IT/bank) and urgency (act NOW or face consequences)", "Happiness and excitement", "Sadness and sympathy"],
      correct: 1,
      explanation: "Attackers create fake authority ('I'm the CEO') combined with urgency ('you must act in the next hour') to bypass rational thinking."
    },
    {
      q: "You get a call from 'IT support' who says they need your password to fix a critical server issue affecting your account. You should:",
      options: ["Give it — IT needs it to fix the issue", "Ask for their employee ID before complying", "Refuse — real IT staff never need your password and can reset it themselves", "Email them the password instead of saying it out loud"],
      correct: 2,
      explanation: "Legitimate IT has administrative tools to fix systems without ever needing your personal password. This is classic vishing."
    },
    {
      q: "What is 'quid pro quo' in a social engineering context?",
      options: ["A Latin term used in phishing emails to sound official", "Offering something (free IT help, a gift) in exchange for the target's credentials or access", "A type of ransomware payment method", "Impersonating a vendor to gain access to supplier systems"],
      correct: 1,
      explanation: "'Something for something' — e.g. 'I'll fix your computer issue for free, just give me your login so I can remote in.'"
    },
    {
      q: "A stranger in the office lobby says they work in accounting and forgot their badge. They ask you to let them in. What should you do?",
      options: ["Let them in — it's rude to leave a colleague locked out", "Ask them to wait and call the front desk or security to verify their identity", "Ask their name and let them in if they answer confidently", "Ignore them completely"],
      correct: 1,
      explanation: "Always verify unexpected visitors through official channels. This is a textbook tailgating/pretexting social engineering attempt."
    },
    {
      q: "Which of these is an example of a 'vishing' (voice phishing) attack?",
      options: ["A fake email asking you to reset your password", "A phone call from 'your bank' asking you to confirm your card details to prevent fraud", "A fake website that looks like your bank", "A text message with a link to a prize"],
      correct: 1,
      explanation: "Vishing = voice phishing. Attackers call you, create urgency, and extract sensitive information over the phone."
    },
    {
      q: "What is 'scareware' in the context of social engineering?",
      options: ["Software that displays horror movie content to frighten users", "Fake security alerts (like pop-ups saying 'YOUR COMPUTER HAS A VIRUS!') designed to panic you into taking harmful action", "Ransomware that uses threatening messages", "Email threats from criminals demanding money"],
      correct: 1,
      explanation: "Scareware creates panic with fake virus warnings or police notices. Users then call a fake 'support' number or download malware voluntarily."
    },
    {
      q: "A new 'IT technician' visits your office and asks for a few minutes alone with your workstation to run 'diagnostics'. What should you do?",
      options: ["Allow it — IT maintenance is routine", "Stay with them during the entire session and verify their identity with IT management first", "Allow it but watch from a distance", "Leave them to it but ask them to sign in to the visitor log first"],
      correct: 1,
      explanation: "Legitimate IT visits are scheduled and verified. Always confirm with IT management directly before allowing anyone access to your workstation."
    },
    {
      q: "Why are social engineering attacks particularly dangerous?",
      options: ["They require very advanced technical skills to execute", "They exploit human psychology, which can't be patched with software updates", "They only affect large organizations, not individuals", "Antivirus software can reliably detect and block them"],
      correct: 1,
      explanation: "Technology can be patched, but human psychology cannot. Training and awareness are the only effective defences."
    },
    {
      q: "An email arrives in your company inbox appearing to be from your CEO, asking you to urgently wire transfer $15,000 to a vendor. What should you do?",
      options: ["Transfer it — the CEO wouldn't ask unless it's important", "Call the CEO directly on their known phone number to verify before taking any action", "Reply to the email asking for confirmation", "Transfer half the amount as a precaution"],
      correct: 1,
      explanation: "This is Business Email Compromise (BEC) — one of the most costly social engineering attacks. Always verify financial requests via phone."
    },
    {
      q: "What technique involves manipulating a target by first doing them a small favour, making them feel obligated to reciprocate?",
      options: ["Tailgating", "Baiting", "Reciprocity manipulation", "Shoulder surfing"],
      correct: 2,
      explanation: "Attackers exploit the human instinct to return favours. 'I helped you fix your printer — now can you just let me into this one system?'"
    },
    {
      q: "What is 'shoulder surfing'?",
      options: ["Monitoring someone's internet traffic", "Looking over someone's shoulder to see their screen, keyboard, or PIN entry", "Sending emails pretending to be from a colleague", "A technique for cracking wireless networks"],
      correct: 1,
      explanation: "Shoulder surfing is as simple as standing behind someone at an ATM or in a café and watching them enter their PIN or password."
    },
    {
      q: "A person receives a call from someone claiming to be from 'HMRC/IRS' saying they owe back taxes and will be arrested unless they pay immediately in gift cards. This is:",
      options: ["A legitimate government procedure", "A well-known government impersonation scam — real tax agencies never demand immediate gift card payment", "An automated security check", "A debt collection agency following legal procedure"],
      correct: 1,
      explanation: "Government agencies NEVER demand immediate payment via gift cards, cryptocurrency, or wire transfers over the phone. This is always a scam."
    },
    {
      q: "What is 'dumpster diving' as a social engineering technique?",
      options: ["A type of phishing using trash-themed emails", "Going through an organization's discarded documents or physical waste to find useful information for an attack", "Corrupting a target's files to make them unreadable", "Accessing abandoned social media accounts"],
      correct: 1,
      explanation: "Thrown-away documents, old hard drives, and printed reports can contain passwords, org charts, and account numbers — valuable attack intelligence."
    },
    {
      q: "How can you best protect yourself and your organization against social engineering?",
      options: ["Install the most expensive antivirus software available", "Follow a 'verify first, act second' rule — always authenticate unexpected requests through official channels", "Never communicate with people you don't recognize", "Only use phone communication and avoid all digital tools"],
      correct: 1,
      explanation: "Slowing down and verifying through known, official channels defeats almost all social engineering attacks."
    },
    {
      q: "What makes CEO fraud (also called Business Email Compromise) effective?",
      options: ["It uses advanced malware that bypasses security software", "It exploits employees' respect for authority, making them act quickly without questioning", "It uses the CEO's real email address, which is impossible to block", "It is always sent outside of business hours when security teams aren't monitoring"],
      correct: 1,
      explanation: "Employees are trained to respond quickly to senior leadership. Attackers exploit this by impersonating executives in urgent situations."
    },
    {
      q: "An attacker calls a company's helpdesk claiming to be a manager locked out of their account, providing some personal details that sound convincing. This exploits:",
      options: ["A software vulnerability in the helpdesk system", "The helpdesk operator's desire to be helpful and their tendency to trust seemingly legitimate callers", "The company's lack of antivirus software", "A weakness in the telephone network"],
      correct: 1,
      explanation: "Helpdesk operators want to solve problems. Attackers exploit this helpfulness combined with publicly available personal details to bypass verification."
    },
    {
      q: "What is the best first response to ANY unexpected request — whether by phone, email, or in person — that involves giving access or information?",
      options: ["Comply immediately to avoid causing problems", "Pause, independently verify the requester's identity through official channels, then decide", "Ask them to put the request in writing", "Ask a colleague if they think the request seems legitimate"],
      correct: 1,
      explanation: "Stop, verify, then act. This single habit defeats the vast majority of social engineering attempts, which rely on speed and compliance."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  MODULE 4 — MALWARE & RANSOMWARE (20 questions)
  // ──────────────────────────────────────────────────────────
  malware: [
    {
      q: "What is malware?",
      options: ["A type of network hardware", "Any software intentionally designed to damage, disrupt, or gain unauthorized access to computer systems", "A weak or insecure password", "An outdated operating system"],
      correct: 1,
      explanation: "Malware = malicious software. It's an umbrella term for viruses, ransomware, spyware, trojans, worms, and more."
    },
    {
      q: "What does ransomware do to your files?",
      options: ["Deletes them permanently", "Encrypts them and demands payment to restore access", "Uploads them to the internet publicly", "Slows down the process of opening files"],
      correct: 1,
      explanation: "Ransomware locks your files with strong encryption, making them inaccessible until you pay — though paying doesn't guarantee recovery."
    },
    {
      q: "What is a computer virus?",
      options: ["A program that speeds up your computer", "Malicious code that attaches itself to files and spreads to other files when opened or shared", "A hardware fault that corrupts data", "An outdated website certificate"],
      correct: 1,
      explanation: "Like a biological virus, a computer virus replicates by attaching to host files and spreading when those files are executed or shared."
    },
    {
      q: "What is a Trojan horse (or 'Trojan') in cybersecurity?",
      options: ["A type of network firewall", "Malware disguised as a legitimate, useful program that secretly performs malicious actions", "A very slow ransomware attack", "An ancient hacking technique that is no longer used"],
      correct: 1,
      explanation: "Named after the Greek myth — it looks harmless or useful from the outside (like a free game or tool) but delivers a malicious payload."
    },
    {
      q: "How is a computer worm different from a virus?",
      options: ["Worms are less dangerous than viruses", "A worm self-replicates and spreads across networks on its own without needing user action or a host file", "A worm only affects mobile devices", "Viruses spread over networks while worms only spread via USB drives"],
      correct: 1,
      explanation: "Worms are especially dangerous because they spread automatically — one infected computer can infect an entire network within minutes."
    },
    {
      q: "What is spyware?",
      options: ["Software used by government intelligence agencies only", "Malware that secretly monitors your activity, records keystrokes, and captures passwords without you knowing", "Anti-hacker software for corporate espionage prevention", "A type of firewall that monitors inbound traffic"],
      correct: 1,
      explanation: "Spyware hides silently on your device, potentially capturing every password you type, website you visit, and message you send."
    },
    {
      q: "What is the BEST defence against ransomware?",
      options: ["Paying the ransom quickly to recover files", "Having up-to-date, tested backups of all important files stored separately from your main device", "Installing more RAM in your computer", "Only using your computer offline"],
      correct: 1,
      explanation: "If you have clean backups, ransomware loses all its power. You can simply restore your files and refuse to pay."
    },
    {
      q: "A pop-up on your screen says 'WARNING: 3 viruses detected! Call this number NOW for free removal.' What should you do?",
      options: ["Call the number immediately before the viruses spread", "This is likely scareware — close the pop-up using Task Manager and do NOT call the number", "Pay for the virus removal service they recommend", "Restart your computer and then call the number"],
      correct: 1,
      explanation: "This is a classic tech support scam. Real antivirus programs don't tell you to call a phone number. Close the tab or use Task Manager."
    },
    {
      q: "How do attackers most commonly deliver malware to victims?",
      options: ["Solely through physically accessing your computer", "Through email attachments, malicious links, infected USB drives, and compromised websites", "Only through high-profile government hacking operations", "By guessing and entering your WiFi password"],
      correct: 1,
      explanation: "Most malware delivery is opportunistic — you click a bad link or open a bad attachment. User behaviour is the #1 infection vector."
    },
    {
      q: "What does 'keylogger' malware do?",
      options: ["Records every keystroke you type — capturing passwords, messages, and personal data", "Locks your keyboard until you pay a ransom", "Monitors which keys you press most often to optimize typing", "Tracks the websites you visit and sells this data to advertisers"],
      correct: 0,
      explanation: "Keyloggers run invisibly in the background. Every password, credit card number, or message you type is captured and sent to attackers."
    },
    {
      q: "What is a 'rootkit'?",
      options: ["Software used by IT administrators to access the root directory", "Malware that hides deep within a system's core processes, giving attackers persistent hidden control", "A legitimate tool for removing malware infections", "A type of router firmware update"],
      correct: 1,
      explanation: "Rootkits are extremely difficult to detect and remove because they compromise the operating system itself, hiding their own presence."
    },
    {
      q: "Why is keeping your software updated important for malware protection?",
      options: ["Updates improve performance and add new features", "Software updates often include patches for security vulnerabilities that malware actively exploits", "Updated software uses less battery power", "Malware only targets older operating systems"],
      correct: 1,
      explanation: "The WannaCry ransomware infected 200,000+ computers in 2017 by exploiting a vulnerability that had already been patched — on unupdated machines."
    },
    {
      q: "What is adware?",
      options: ["Software that blocks online advertisements", "Unwanted software that displays aggressive advertising and can slow down or compromise your device", "A legitimate advertising analytics tool used by marketing teams", "A type of ransomware that demands payment to remove ads"],
      correct: 1,
      explanation: "Adware can redirect your browser, inject ads into every website, and slow your system — and often comes bundled with 'free' software downloads."
    },
    {
      q: "You receive an email from a friend with an attachment saying 'Check out these funny photos!'. You should:",
      options: ["Open it — you know the sender, so it's safe", "Be cautious — your friend's email may have been hacked and the attachment could contain malware", "Open it only on your phone, not your computer", "Reply asking your friend to resend it as it might be corrupted"],
      correct: 1,
      explanation: "Malware often spreads by taking over victims' email accounts and sending itself to all their contacts. Verify unexpected attachments via another channel."
    },
    {
      q: "What is a 'botnet'?",
      options: ["A network of robot customer service agents", "A network of malware-infected computers that attackers remotely control — often for spam, attacks, or mining cryptocurrency", "A type of internet firewall used by corporations", "A diagnostic tool used by IT professionals"],
      correct: 1,
      explanation: "Your computer could be part of a botnet without your knowledge — silently sending spam, attacking other websites, or mining cryptocurrency for criminals."
    },
    {
      q: "Which of the following is a sign your computer may be infected with malware?",
      options: ["Your computer recently received a software update", "Unusual slowness, unexpected pop-ups, programs crashing, or strange network activity you didn't initiate", "Your internet connection is faster than usual", "You recently changed your desktop wallpaper"],
      correct: 1,
      explanation: "These are common malware symptoms. If you notice them, run a full antivirus scan immediately and disconnect from the internet."
    },
    {
      q: "Should you pay ransomware attackers to recover your files?",
      options: ["Yes — they always provide the decryption key after payment", "No — payment is not guaranteed to work, funds criminal activity, and marks you as a repeat target", "Only if the ransom is less than $500", "Yes, but only using untraceable cryptocurrency"],
      correct: 1,
      explanation: "The FBI and cybersecurity experts advise against paying. Many victims pay and still never get their files back. Backups are the answer."
    },
    {
      q: "What is 'fileless malware'?",
      options: ["Malware that deletes all files from your system", "Malware that runs entirely in RAM without writing files to disk, making it harder for antivirus to detect", "Malware specifically designed to steal files", "A type of malware that only affects USB drives"],
      correct: 1,
      explanation: "Fileless malware lives in memory only, exploiting legitimate system tools. It leaves minimal traces and evades traditional antivirus detection."
    },
    {
      q: "You find a USB drive in the office car park labeled 'Confidential HR Files'. What should you do?",
      options: ["Plug it in to see if it belongs to a colleague", "Take it to IT security or management without plugging it in — it could be a baiting attack", "Plug it in on a spare computer to safely check the contents", "Leave it exactly where it is and ignore it"],
      correct: 1,
      explanation: "Dropping infected USB drives in car parks is a real, common attack. Never plug in a found USB drive — hand it to IT security instead."
    },
    {
      q: "What is 'cryptojacking'?",
      options: ["Stealing cryptocurrency from an exchange", "Secretly using your computer's processing power to mine cryptocurrency for the attacker without your knowledge", "Encrypting your cryptocurrency wallet and demanding ransom", "A scam involving fake cryptocurrency investment opportunities"],
      correct: 1,
      explanation: "Cryptojacking runs silently, draining your CPU/battery, slowing your device, and increasing your electricity bill — all for the attacker's profit."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  MODULE 5 — ONLINE PRIVACY (20 questions)
  // ──────────────────────────────────────────────────────────
  privacy: [
    {
      q: "What are 'cookies' on websites?",
      options: ["Malicious files automatically downloaded when you visit a website", "Small files stored in your browser that track your activity, preferences, and identity across websites", "Pop-up advertisements used by marketing companies", "Files that make websites load faster by caching content locally"],
      correct: 1,
      explanation: "Cookies themselves aren't always harmful, but tracking cookies follow you across the internet to build advertising profiles — often without clear consent."
    },
    {
      q: "Why is oversharing on social media a security risk?",
      options: ["It violates social media terms of service", "Sharing your location, workplace, daily routine, or personal details gives attackers the information they need to target you", "Social media companies sell your data to competitors", "It reduces the privacy of your friends who appear in your posts"],
      correct: 1,
      explanation: "Attackers use public social media profiles to craft targeted phishing attacks, answer security questions, or plan physical crimes."
    },
    {
      q: "What is a VPN (Virtual Private Network)?",
      options: ["A type of secure email service", "A service that encrypts your internet connection and hides your IP address, protecting your privacy online", "A parental control system for children's internet access", "A network only available to government employees"],
      correct: 1,
      explanation: "A VPN creates an encrypted tunnel for your internet traffic — essential on public Wi-Fi and useful for general privacy."
    },
    {
      q: "Why is public Wi-Fi risky without protection?",
      options: ["Public Wi-Fi is always slower than home internet", "Attackers on the same network can potentially intercept your unencrypted internet traffic", "Public Wi-Fi providers are legally permitted to sell your browsing data", "Your device can get physically stolen more easily near public Wi-Fi hotspots"],
      correct: 1,
      explanation: "On unsecured public Wi-Fi, your traffic can be intercepted — especially if you're using sites without HTTPS or you're not using a VPN."
    },
    {
      q: "What does HTTPS tell you about a website?",
      options: ["The website is owned by a trustworthy company", "The connection between your browser and the website is encrypted", "The website has been verified as scam-free by a government agency", "The website is faster than HTTP sites"],
      correct: 1,
      explanation: "HTTPS means your data is encrypted in transit. Without it, anyone on your network could read what you send. But HTTPS doesn't mean the site is safe — phishing sites also use HTTPS."
    },
    {
      q: "What is a 'data broker'?",
      options: ["A person who illegally sells stolen credit card data on the dark web", "A legal company that collects personal information (name, address, income, habits) and sells it to marketers and others", "A software tool used to transfer data between databases", "An IT professional who manages company data"],
      correct: 1,
      explanation: "Data brokers collect your information from public records, store loyalty cards, and online activity — selling comprehensive profiles to anyone who pays."
    },
    {
      q: "You install a free flashlight app on your phone. During setup, it requests access to your contacts, microphone, and location. What should you do?",
      options: ["Accept all permissions — apps need them to function properly", "Deny all unnecessary permissions — a flashlight has no legitimate need for contacts, microphone, or location", "Accept permissions only for the microphone", "Uninstall the app but install a different free flashlight app instead"],
      correct: 1,
      explanation: "App permissions should match the app's purpose. Excessive permissions indicate data harvesting. Deny what isn't needed — or find a more trustworthy alternative."
    },
    {
      q: "What is 'metadata' and why does it matter for privacy?",
      options: ["The visible content of a file like a photo or document", "Hidden data attached to files (like GPS location, device model, and time) that can reveal sensitive information even if the content seems harmless", "A website's terms and conditions", "The file size and format of a document"],
      correct: 1,
      explanation: "A photo shared online can contain GPS coordinates showing exactly where it was taken, plus your device model and time. Attackers exploit this routinely."
    },
    {
      q: "What is the 'dark web'?",
      options: ["Any website that uses a dark colour theme", "A part of the internet not indexed by search engines, accessible via special software, where stolen data is commonly bought and sold", "A slower version of the internet used in developing countries", "The internet between midnight and 6am"],
      correct: 1,
      explanation: "The dark web hosts marketplaces for stolen credentials, credit card numbers, and personal data harvested from breaches — affecting ordinary people every day."
    },
    {
      q: "You want to limit how much Google knows about your searches. What is the most effective step?",
      options: ["Use Incognito Mode in Chrome", "Use a privacy-focused search engine like DuckDuckGo, which doesn't track or store your searches", "Clear your cookies once a month", "Use a different Google account for sensitive searches"],
      correct: 1,
      explanation: "Incognito mode only prevents local history — Google still logs your searches. DuckDuckGo and similar engines don't build a profile on you at all."
    },
    {
      q: "What does 'incognito mode' actually protect you from?",
      options: ["It hides your activity from your internet service provider", "It prevents saving browsing history, cookies, and form data on your local device only", "It makes you completely anonymous online", "It encrypts all your internet traffic"],
      correct: 1,
      explanation: "Incognito is private from others using the same computer — but your ISP, employer, and websites can still see your activity."
    },
    {
      q: "Why should you delete old, unused online accounts?",
      options: ["To free up storage on your computer", "Old accounts still hold your personal data and can be breached or accessed without your knowledge", "To improve the speed of active accounts", "Social media companies charge fees for inactive accounts"],
      correct: 1,
      explanation: "Old accounts are attack targets. A breach of a service you forgot you used can expose your email, password, or personal details to attackers."
    },
    {
      q: "What personal information should you NEVER post publicly on social media?",
      options: ["Your favourite movies or music", "Your current precise location, home address, passport/ID details, or financial information", "Your general city or country of residence", "Your professional job title"],
      correct: 1,
      explanation: "Location, home address, and ID details can enable physical crimes, identity theft, and targeted attacks. These should always remain private."
    },
    {
      q: "You receive an 'Accept All Cookies' pop-up on a website. What is the privacy-conscious choice?",
      options: ["Always click Accept All to make the pop-up disappear quickly", "Click 'Manage Preferences' and disable non-essential tracking/advertising cookies", "Immediately close the website without accepting anything", "Accept only advertising cookies to support free content"],
      correct: 1,
      explanation: "Managing cookie preferences and rejecting non-essential cookies significantly reduces how much of your online behaviour is tracked."
    },
    {
      q: "What is 'identity theft'?",
      options: ["Changing your name or identity legally", "When someone steals your personal information to commit fraud — opening accounts, taking loans, or making purchases in your name", "When a company sells your data without your permission", "Losing your ID card or passport"],
      correct: 1,
      explanation: "Identity theft can take years to resolve and destroy your credit score. Protecting your personal data online is your best prevention."
    },
    {
      q: "When reviewing app permissions on your phone, which permission should you be MOST cautious about granting unnecessarily?",
      options: ["Access to your camera roll (photos)", "Access to your precise, real-time GPS location at all times", "Access to your Wi-Fi network name", "Permission to send you notifications"],
      correct: 1,
      explanation: "Continuous location tracking reveals your home, workplace, daily routine, and travel — an incredibly detailed profile that can enable stalking or targeted attacks."
    },
    {
      q: "What does 'two-factor authentication' protect you from even if your password is stolen?",
      options: ["Malware that is already installed on your device", "Unauthorized login by someone who has your password but doesn't have access to your second factor (phone, app)", "Having your account hacked through your email address", "Your device being physically stolen"],
      correct: 1,
      explanation: "Even if an attacker has your password, they still can't log in without the second factor — making stolen credentials nearly useless."
    },
    {
      q: "Which of these is the safest type of information to share publicly on LinkedIn?",
      options: ["Your date of birth, home address, and phone number", "Your job title, industry, and professional skills", "Your daily schedule and commute route", "The software and systems your company uses internally"],
      correct: 1,
      explanation: "Professional information is appropriate for LinkedIn. Personal details like date of birth, phone, and address can be used for identity theft or targeted attacks."
    },
    {
      q: "A website is asking for your date of birth 'to verify your age'. You only need to be 18+. What's the best approach?",
      options: ["Always provide your exact real date of birth", "Consider providing a partial or approximate date (correct year) rather than your exact full date of birth", "Provide completely fake details — it doesn't matter", "Refuse and close the website"],
      correct: 1,
      explanation: "Your exact date of birth is used in identity verification and fraud. For age-verification only, the exact date isn't necessary — provide minimal information."
    },
    {
      q: "What is 'doxxing'?",
      options: ["Documenting cybersecurity incidents in a log", "Publicly posting someone's private personal information online without their consent, typically to harass them", "A legitimate background check process", "A way to verify someone's online identity"],
      correct: 1,
      explanation: "Doxxing exposes personal details (address, phone, workplace) to cause harassment, threats, or physical harm. Limiting public personal info makes doxxing much harder."
    }
  ],

  // ──────────────────────────────────────────────────────────
  //  MODULE 6 — SAFE BROWSING (20 questions)
  // ──────────────────────────────────────────────────────────
  safe_browsing: [
    {
      q: "What does the padlock icon in your browser's address bar mean?",
      options: ["The website is completely safe and trustworthy", "The connection between your browser and the website is encrypted (HTTPS)", "The website has been verified as scam-free by an authority", "Your password manager is active on this site"],
      correct: 1,
      explanation: "HTTPS means your connection is encrypted — but NOT that the website itself is legitimate. Phishing sites also use HTTPS and show a padlock."
    },
    {
      q: "You want to visit your bank online. What is the safest approach?",
      options: ["Search for your bank on Google and click the top result", "Type your bank's web address directly into the address bar", "Click the bookmark you saved from a verified first visit", "Use a link from an email your bank sent you"],
      correct: 1,
      explanation: "Type directly or use saved bookmarks. Sponsored Google results and email links can be fake. The address bar ensures you go where you intend."
    },
    {
      q: "A website offers a free download of a popular $60 software for free. What should you think?",
      options: ["Great deal — download it immediately", "This is almost certainly illegal and the download likely contains malware", "It's likely an official trial version from the developer", "Free software is always safe as long as it has good reviews"],
      correct: 1,
      explanation: "'Too good to be true' online almost always means malware, piracy, or a scam. Free cracked software is one of the most common malware delivery methods."
    },
    {
      q: "What is a 'drive-by download'?",
      options: ["Downloading files while driving using mobile data", "Malware that automatically downloads and installs when you visit a compromised or malicious website — without clicking anything", "A fast download service offered by content delivery networks", "Downloading files to a USB drive"],
      correct: 1,
      explanation: "Drive-by downloads exploit browser vulnerabilities. Simply visiting a malicious site can infect your device — another reason to keep browsers updated."
    },
    {
      q: "What is 'typosquatting'?",
      options: ["A hacking technique that exploits spelling errors in code", "Registering domain names similar to popular sites (e.g. 'gooogle.com') to catch people who mistype URLs", "Sending emails with deliberate typos to bypass spam filters", "A technique for squatting domain names before a legitimate company registers them"],
      correct: 1,
      explanation: "Mistyping a popular URL can land you on a fake site designed to steal your credentials. Always double-check the address bar before entering any information."
    },
    {
      q: "Why is using a public computer (library, hotel, internet café) for banking risky?",
      options: ["Public computers have slower internet speeds", "Public computers may have keyloggers, malware, or saved session data that exposes your credentials to the next user", "Banks block logins from public IP addresses", "Public computers use older versions of web browsers that banks don't support"],
      correct: 1,
      explanation: "Public computers are frequently compromised. Never enter banking, email, or any sensitive credentials on a computer you don't control."
    },
    {
      q: "What should you do if a website's browser certificate warning appears, saying 'Your connection is not private'?",
      options: ["Click 'Advanced' and proceed anyway — certificate warnings are usually false alarms", "Do NOT proceed — go back and avoid the site, especially if it involves any personal information", "Refresh the page — the error usually resolves itself", "Try using a different browser"],
      correct: 1,
      explanation: "Certificate warnings mean encryption cannot be verified. For any site asking for personal information, this is a serious warning to leave immediately."
    },
    {
      q: "A pop-up asks 'Allow notifications from BestDeals.com?' — what should you do?",
      options: ["Click Allow if you plan to shop there frequently", "Block/Deny — granting notifications to unknown sites leads to spam, scam alerts, and potential malware", "Allow only once", "It doesn't matter — notifications can always be turned off later"],
      correct: 1,
      explanation: "Browser notification spam is a major nuisance and can lead to malicious sites. Default to denying notifications from sites you don't fully trust."
    },
    {
      q: "What is the benefit of using a browser extension like 'uBlock Origin'?",
      options: ["It makes websites load faster by improving server connections", "It blocks advertisements, trackers, and known malicious domains, protecting your privacy and security", "It automatically fills in login forms on trusted websites", "It translates websites into your native language automatically"],
      correct: 1,
      explanation: "uBlock Origin is free, open-source, and highly effective at blocking ads, trackers, and malicious scripts that could infect your device."
    },
    {
      q: "You are connected to 'Free_Cafe_WiFi' at a coffee shop. Which activities are SAFEST on this connection?",
      options: ["Online banking and investment account management", "Light browsing of public news websites and general information", "Logging into your email to send sensitive work documents", "Accessing your company's internal network without a VPN"],
      correct: 1,
      explanation: "On untrusted public Wi-Fi, only use it for non-sensitive activities. For anything requiring a login, use mobile data or a VPN instead."
    },
    {
      q: "What is a 'man-in-the-middle' (MITM) attack?",
      options: ["An attack where a person physically intercepts your device between two locations", "An attacker secretly positioning themselves between you and a website, intercepting or altering your communications", "When a hacker takes over a video call in progress", "An attack targeting the middle management of a corporation"],
      correct: 1,
      explanation: "MITM attacks are common on public Wi-Fi. The attacker sees everything — login credentials, messages, financial data — while you believe you're communicating normally."
    },
    {
      q: "What does 'clearing your browser cache and cookies' accomplish?",
      options: ["Permanently deletes your browsing history from all servers", "Removes locally stored tracking data, saved sessions, and temporary files from your device", "Makes your internet connection faster and more secure", "Prevents websites from tracking your future browsing sessions permanently"],
      correct: 1,
      explanation: "Clearing cache and cookies removes locally stored data — useful for privacy and fixing website issues, but doesn't erase records on servers."
    },
    {
      q: "When shopping online, which of these is the most important security check?",
      options: ["The website has lots of positive reviews", "The URL begins with https:// and the domain exactly matches the legitimate store's official domain", "The website offers free shipping and returns", "The website displays well-known brand logos"],
      correct: 1,
      explanation: "Fake shopping sites can have fake reviews and display any logo. The URL is the only objective indicator of which site you're actually on."
    },
    {
      q: "What does DNS filtering do for internet security?",
      options: ["Speeds up your internet connection by filtering unnecessary data", "Blocks access to known malicious websites before they even load in your browser", "Filters spam from your email inbox", "Controls which devices can connect to your Wi-Fi network"],
      correct: 1,
      explanation: "DNS filtering (like Cloudflare 1.1.1.1) checks every website request against databases of malicious sites, blocking them before they can harm your device."
    },
    {
      q: "A banner ad on a website says 'Your McAfee subscription has expired! Renew now.' You've never had McAfee. This is most likely:",
      options: ["A legitimate McAfee renewal notice served based on your location", "A scam ad (malvertising) designed to frighten you into clicking a fake security alert", "An error from your browser's security system", "A notification from your internet service provider"],
      correct: 1,
      explanation: "Malvertising uses fake security warnings to trick users into calling scam numbers or downloading malware disguised as security software."
    },
    {
      q: "Why should you log out of websites when you're finished, especially on shared computers?",
      options: ["Logging out speeds up the website for the next user", "It ends your authenticated session, preventing the next user from accessing your account", "Websites charge more data usage if you stay logged in", "Browsers automatically delete all passwords when you log out"],
      correct: 1,
      explanation: "An active session means anyone who uses the browser after you can access your account. Always log out, especially on devices you don't own."
    },
    {
      q: "What is a 'zero-day vulnerability' in the context of web browsing?",
      options: ["A website that has been online for less than one day", "A security flaw in software that is unknown to the vendor and therefore has no patch available yet", "A type of attack that takes zero seconds to execute", "A browser setting that prevents all potentially dangerous websites from loading"],
      correct: 1,
      explanation: "Zero-days are extremely dangerous because there's no fix yet. Keeping software updated minimizes exposure — once patched, you're protected."
    },
    {
      q: "You visit a website and it asks you to disable your ad blocker to continue. What should you consider?",
      options: ["Always disable ad blockers — website owners need advertising revenue", "Weigh the risk — some sites monetize responsibly, but disabling blockers on unknown sites exposes you to potentially malicious ads", "Ad blockers are illegal and should be disabled on all websites", "Disable the blocker only if the website offers free content"],
      correct: 1,
      explanation: "Malvertising (malicious ads) is a real threat. Consider the site's trustworthiness before disabling protection — reputable news sites are generally safer to whitelist."
    },
    {
      q: "What is 'browser fingerprinting'?",
      options: ["Using a fingerprint sensor to log into a website", "A tracking technique that identifies your device based on its unique configuration (screen size, fonts, settings) without using cookies", "Scanning your browser for viruses", "Storing your login fingerprint data for faster access"],
      correct: 1,
      explanation: "Even without cookies, websites can identify you based on your unique browser settings. Privacy browsers like Brave attempt to combat this."
    },
    {
      q: "What is the safest type of Wi-Fi network to connect to?",
      options: ["Any open network with strong signal strength", "A password-protected WPA3 network you control, such as your home network", "Any public hotspot provided by a well-known retail chain", "An open network that requires a web page login (captive portal)"],
      correct: 1,
      explanation: "WPA3-protected networks you control are the gold standard. When away from home, mobile data plus a VPN is the next safest option."
    }
  ]
};

// ============================================================
//  Quiz State & Engine
// ============================================================

let currentMod   = 'phishing';
let sessionQs    = [];       // shuffled subset for this session
let currentQ     = 0;
let answered     = false;
let quizResults  = [];

// ── Utility: shuffle an array (Fisher-Yates) ──
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Pick QUESTIONS_PER_QUIZ random questions from a module ──
function buildSession(mod) {
  const pool = ALL_QUESTIONS[mod] || [];
  return shuffleArray(pool).slice(0, Math.min(QUESTIONS_PER_QUIZ, pool.length));
}

// ============================================================
//  Init & Module Selection
// ============================================================

function initQuiz() {
  requireLogin();
  const params = new URLSearchParams(window.location.search);
  const mod = params.get('module');
  if (mod && ALL_QUESTIONS[mod]) {
    currentMod = mod;
    document.querySelectorAll('.mod-btn').forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(`'${mod}'`)) {
        b.classList.add('active');
      }
    });
  }
  startSession();
}

function selectMod(el, mod) {
  document.querySelectorAll('.mod-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentMod = mod;
  startSession();
}

function startSession() {
  sessionQs   = buildSession(currentMod);
  currentQ    = 0;
  answered    = false;
  quizResults = [];
  renderQuestion();
}

// ============================================================
//  Rendering
// ============================================================

function renderQuestion() {
  if (currentQ >= sessionQs.length) { renderResult(); return; }

  const q   = sessionQs[currentQ];
  const pct = Math.round((currentQ / sessionQs.length) * 100);

  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-card">
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="q-counter">Question ${currentQ + 1} of ${sessionQs.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="options" id="options">
        ${q.options.map((opt, i) => `<button class="option" onclick="answer(${i})">${opt}</button>`).join('')}
      </div>
      <div id="feedback"></div>
    </div>`;

  answered = false;
}

function answer(idx) {
  if (answered) return;
  answered = true;

  const q    = sessionQs[currentQ];
  const opts = document.querySelectorAll('.option');
  opts.forEach(o => o.classList.add('disabled'));

  const isCorrect = (idx === q.correct);

  quizResults.push({
    module: currentMod,
    question: q.q,
    chosen: idx,
    correctAnswer: q.correct,
    isCorrect
  });

  const fb = document.getElementById('feedback');

  if (isCorrect) {
    opts[idx].classList.add('correct');
    fb.innerHTML = `<div class="feedback correct">✓ Correct! ${q.explanation}</div>`;
  } else {
    opts[idx].classList.add('wrong');
    opts[q.correct].classList.add('correct');
    fb.innerHTML = `<div class="feedback wrong">✗ Incorrect. ${q.explanation}</div>`;
  }

  const isLast = currentQ + 1 >= sessionQs.length;
  fb.innerHTML += `<button class="btn-next" onclick="nextQ()">${isLast ? 'See Results →' : 'Next Question →'}</button>`;
}

function nextQ() {
  currentQ++;
  renderQuestion();
}

// ============================================================
//  Results
// ============================================================

function renderResult() {
  const report = generateReport();

  const icon = report.accuracy >= 80 ? '🏆' : report.accuracy >= 60 ? '👍' : '📖';
  const msg  = report.accuracy >= 80 ? 'Excellent work!' : report.accuracy >= 60 ? 'Good effort!' : 'Keep studying!';

  // Award points
  const user = getCurrentUser();
  if (user) {
    user.score = (user.score || 0) + report.correct * 20;
    saveUser(user);
  }

  // Build missed-questions review
  const missedHTML = report.mistakes.length
    ? `<div style="margin-top:24px; text-align:left;">
         <h4 style="color:#4fc3f7; font-size:13px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px;">📋 Review Missed Questions</h4>
         ${report.mistakes.map(m => `
           <div style="background:#0a0f1e; border:1px solid #2d1f00; border-radius:10px; padding:14px; margin-bottom:10px;">
             <p style="color:#a0b4cc; font-size:13px; margin-bottom:6px;">${m.question}</p>
             <p style="color:#66bb6a; font-size:13px;">✓ Correct answer: <strong>${sessionQs.find(q => q.q === m.question)?.options[m.correctAnswer] || ''}</strong></p>
           </div>`).join('')}
       </div>`
    : `<p style="color:#66bb6a; margin-top:16px;">🎉 Perfect score — you got every question right!</p>`;

  document.getElementById('quizArea').innerHTML = `
    <div class="result-card">
      <div class="result-icon">${icon}</div>
      <div class="result-score">${report.correct}/${report.totalQuestions}</div>
      <div class="result-label">${msg} &nbsp; Accuracy: ${report.accuracy}%</div>

      <div style="margin-top:16px; font-size:13px; color:#7a94b0; text-align:left;">
        <p><b>Weak Areas:</b> ${report.weakAreas.length ? report.weakAreas.join(', ') : 'None — great job!'}</p>
        <p><b>Strong Areas:</b> ${report.strongAreas.length ? report.strongAreas.join(', ') : 'Keep practicing'}</p>
      </div>

      ${missedHTML}

      <div class="result-actions" style="margin-top:24px;">
        <button class="btn-retry" onclick="startSession()">🔀 New Random Quiz</button>
        <button class="btn-dash" onclick="window.location.href='dashboard.html'">Go to Dashboard</button>
      </div>
    </div>`;
}

function generateReport() {
  const total   = quizResults.length;
  const correct = quizResults.filter(r => r.isCorrect).length;
  const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

  const moduleStats = {};
  quizResults.forEach(r => {
    if (!moduleStats[r.module]) moduleStats[r.module] = { total: 0, correct: 0 };
    moduleStats[r.module].total++;
    if (r.isCorrect) moduleStats[r.module].correct++;
  });

  const weakAreas   = [];
  const strongAreas = [];
  for (let mod in moduleStats) {
    const acc = Math.round((moduleStats[mod].correct / moduleStats[mod].total) * 100);
    (acc < 60 ? weakAreas : strongAreas).push(mod);
  }

  return {
    totalQuestions: total,
    correct,
    accuracy,
    moduleStats,
    weakAreas,
    strongAreas,
    mistakes: quizResults.filter(r => !r.isCorrect)
  };
}