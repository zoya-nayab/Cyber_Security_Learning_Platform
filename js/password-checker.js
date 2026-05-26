const COMMON = ['password','123456','qwerty','abc123','letmein','admin','welcome','monkey','dragon','master','hello','iloveyou','sunshine','password1','123456789'];

function analyze() {
  const pw = document.getElementById('pwInput').value;
  if (!pw) { reset(); return; }

  const has8      = pw.length >= 8;
  const has12     = pw.length >= 12;
  const hasUpper  = /[A-Z]/.test(pw);
  const hasLower  = /[a-z]/.test(pw);
  const hasNum    = /[0-9]/.test(pw);
  const hasSym    = /[^A-Za-z0-9]/.test(pw);
  const noCommon  = !COMMON.some(c => pw.toLowerCase().includes(c));
  const noPattern = !/(.)\1{2,}|012|123|234|345|456|567|678|789|890|abc|qwe|asd|zxc/i.test(pw);
  const noCommonFull = noCommon && noPattern;

  setCheck('c1','ct1', has8,         'At least 8 characters');
  setCheck('c2','ct2', has12,        'At least 12 characters (recommended)');
  setCheck('c3','ct3', hasUpper,     'Contains uppercase letters (A-Z)');
  setCheck('c4','ct4', hasLower,     'Contains lowercase letters (a-z)');
  setCheck('c5','ct5', hasNum,       'Contains numbers (0-9)');
  setCheck('c6','ct6', hasSym,       'Contains symbols (!@#$%...)');
  setCheck('c7','ct7', noCommonFull, 'No common patterns (123, abc, qwerty...)');

  let pool = 0;
  if (hasLower) pool += 26;
  if (hasUpper) pool += 26;
  if (hasNum)   pool += 10;
  if (hasSym)   pool += 32;
  if (pool === 0) pool = 26;

  const entropy = Math.round(pw.length * Math.log2(pool));
  const score   = [has8, has12, hasUpper, hasLower, hasNum, hasSym, noCommonFull].filter(Boolean).length;

  const levels = [
    { label: 'Very Weak',    color: '#ef5350', pct: 14  },
    { label: 'Weak',         color: '#ef5350', pct: 28  },
    { label: 'Fair',         color: '#ffa726', pct: 45  },
    { label: 'Moderate',     color: '#ffa726', pct: 60  },
    { label: 'Strong',       color: '#4fc3f7', pct: 78  },
    { label: 'Very Strong',  color: '#66bb6a', pct: 92  },
    { label: 'Excellent!',   color: '#66bb6a', pct: 100 },
  ];
  const lvl = levels[Math.min(score, 6)];

  document.getElementById('strengthBar').style.width      = lvl.pct + '%';
  document.getElementById('strengthBar').style.background = lvl.color;
  document.getElementById('strengthText').textContent     = lvl.label;
  document.getElementById('strengthText').style.color     = lvl.color;
  document.getElementById('entropyText').textContent      = entropy + ' bits of entropy';

  const combos  = Math.pow(pool, pw.length);
  const rate    = 10_000_000_000;
  const seconds = combos / rate;
  document.getElementById('crackTime').textContent   = formatTime(seconds);
  document.getElementById('crackTime').style.color   = lvl.color;
  document.getElementById('crackSub').textContent    = 'Assuming offline brute-force at 10 billion guesses/second';
}

function setCheck(dotId, textId, pass, label) {
  const dot = document.getElementById(dotId);
  const txt = document.getElementById(textId);
  dot.className   = 'check-dot ' + (pass ? 'pass' : 'fail');
  dot.textContent = pass ? '✓' : '✗';
  txt.className   = 'check-text ' + (pass ? 'pass' : '');
  txt.textContent = label;
}

function formatTime(s) {
  if (s < 1)          return 'Instantly';
  if (s < 60)         return Math.round(s) + ' seconds';
  if (s < 3600)       return Math.round(s / 60) + ' minutes';
  if (s < 86400)      return Math.round(s / 3600) + ' hours';
  if (s < 2592000)    return Math.round(s / 86400) + ' days';
  if (s < 31536000)   return Math.round(s / 2592000) + ' months';
  if (s < 3.15e10)    return Math.round(s / 31536000) + ' years';
  if (s < 3.15e13)    return Math.round(s / 3.15e10) + ' thousand years';
  if (s < 3.15e16)    return Math.round(s / 3.15e13) + ' million years';
  return 'Billions of years';
}

function reset() {
  document.getElementById('strengthBar').style.width = '0%';
  document.getElementById('strengthText').textContent = 'No password entered';
  document.getElementById('strengthText').style.color = '#4a6280';
  document.getElementById('entropyText').textContent  = '';
  document.getElementById('crackTime').textContent    = '—';
  document.getElementById('crackSub').textContent     = 'Enter a password to see the estimate';
  for (let i = 1; i <= 7; i++) {
    document.getElementById('c' + i).className   = 'check-dot fail';
    document.getElementById('c' + i).textContent = '✗';
    document.getElementById('ct' + i).className  = 'check-text';
  }
}

function toggleShow() {
  const inp = document.getElementById('pwInput');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}