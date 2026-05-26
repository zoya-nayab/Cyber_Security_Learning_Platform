// Toggle between Login and Register forms
function toggleForm() {
  const loginBox = document.getElementById('loginBox');
  const registerBox = document.getElementById('registerBox');
  if (loginBox.style.display === 'none') {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
  } else {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
  }
}

// REGISTER
function handleRegister() {
  const name = document.getElementById('regName').value.trim();
  const username = document.getElementById('regUser').value.trim();
  const password = document.getElementById('regPass').value.trim();
  const alertBox = document.getElementById('registerAlert');

  if (!name || !username || !password) {
    alertBox.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
    return;
  }

  if (password.length < 6) {
    alertBox.innerHTML = '<div class="alert alert-danger">Password must be at least 6 characters.</div>';
    return;
  }

  // Check if username already exists
  const existing = localStorage.getItem('user_' + username);
  if (existing) {
    alertBox.innerHTML = '<div class="alert alert-danger">Username already taken. Try another.</div>';
    return;
  }

  // Save user to localStorage
  const userData = { name, username, password, badges: [], score: 0, completed: [] };
  localStorage.setItem('user_' + username, JSON.stringify(userData));

  alertBox.innerHTML = '<div class="alert alert-success">Account created! Redirecting to login...</div>';
  setTimeout(() => toggleForm(), 1500);
}

// LOGIN
function handleLogin() {
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value.trim();
  const alertBox = document.getElementById('loginAlert');

  if (!username || !password) {
    alertBox.innerHTML = '<div class="alert alert-danger">Please enter username and password.</div>';
    return;
  }

  const stored = localStorage.getItem('user_' + username);
  if (!stored) {
    alertBox.innerHTML = '<div class="alert alert-danger">User not found. Please register first.</div>';
    return;
  }

  const user = JSON.parse(stored);
  if (user.password !== password) {
    alertBox.innerHTML = '<div class="alert alert-danger">Wrong password. Try again.</div>';
    return;
  }

  // Save logged-in session
  localStorage.setItem('loggedInUser', username);
  alertBox.innerHTML = '<div class="alert alert-success">Login successful! Redirecting...</div>';
  setTimeout(() => { window.location.href = 'dashboard.html'; }, 1200);
}

// LOGOUT (call this from any page)
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}

// Protect pages — call this on pages that need login
function requireLogin() {
  const user = localStorage.getItem('loggedInUser');
  if (!user) {
    window.location.href = 'login.html';
  }
  return user;
}

// Get current logged in user data
function getCurrentUser() {
  const username = localStorage.getItem('loggedInUser');
  if (!username) return null;
  const data = localStorage.getItem('user_' + username);
  return data ? JSON.parse(data) : null;
}

// Save updated user data
function saveUser(userData) {
  localStorage.setItem('user_' + userData.username, JSON.stringify(userData));
}