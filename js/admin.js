const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

let allUsers = [];

function loadAdmin() {
  // Simple admin auth check
  const logged = localStorage.getItem('loggedInUser');
  if (logged !== ADMIN_USER) {
    // If not admin, check if admin exists, if not create it
    const existing = localStorage.getItem('user_' + ADMIN_USER);
    if (!existing) {
      const adminData = { name: 'Admin', username: ADMIN_USER, password: ADMIN_PASS, badges: [], score: 0, completed: [] };
      localStorage.setItem('user_' + ADMIN_USER, JSON.stringify(adminData));
    }
    window.location.href = 'login.html';
    return;
  }

  allUsers = getAllUsers();
  renderStats();
  renderTable(allUsers);
  renderActivity();
}

function getAllUsers() {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('user_') && key !== 'user_' + ADMIN_USER) {
      try {
        const u = JSON.parse(localStorage.getItem(key));
        if (u && u.username) users.push(u);
      } catch(e) {}
    }
  }
  return users;
}

function renderStats() {
  const totalLessons = allUsers.reduce((sum, u) => sum + (u.completed || []).length, 0);
  const totalBadges  = allUsers.reduce((sum, u) => sum + (u.badges || []).length, 0);
  const totalScore   = allUsers.reduce((sum, u) => sum + (u.score || 0), 0);

  document.getElementById('totalUsers').textContent   = allUsers.length;
  document.getElementById('totalLessons').textContent = totalLessons;
  document.getElementById('totalBadges').textContent  = totalBadges;
  document.getElementById('totalScore').textContent   = totalScore;
}

function renderTable(users) {
  const tbody = document.getElementById('usersTable');
  if (!users.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="no-users">No registered users yet.</td></tr>';
    return;
  }

  tbody.innerHTML = users.map(u => {
    const lessons   = (u.completed || []).length;
    const badges    = (u.badges || []).length;
    const pct       = Math.round((lessons / 3) * 100);
    const isActive  = lessons > 0 || badges > 0;
    return `
      <tr id="row-${u.username}">
        <td class="td-name">${u.name}</td>
        <td>${u.username}</td>
        <td>${u.score || 0}</td>
        <td><span class="badge-count">🏅 ${badges}</span></td>
        <td>
          <div class="progress-mini"><div class="progress-mini-fill" style="width:${pct}%"></div></div>
          ${lessons}/3
        </td>
        <td><span class="status-pill ${isActive ? 'status-active' : 'status-new'}">${isActive ? 'Active' : 'New'}</span></td>
        <td><button class="action-btn" onclick="removeUser('${u.username}')">Remove</button></td>
      </tr>`;
  }).join('');
}

function filterUsers() {
  const q = document.getElementById('searchBox').value.toLowerCase();
  const filtered = allUsers.filter(u =>
    u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q)
  );
  renderTable(filtered);
}

function removeUser(username) {
  if (!confirm(`Remove user "${username}"? This cannot be undone.`)) return;
  localStorage.removeItem('user_' + username);
  allUsers = getAllUsers();
  renderStats();
  renderTable(allUsers);
  renderActivity();
}

function renderActivity() {
  const list = document.getElementById('activityList');
  const activities = [];

  allUsers.forEach(u => {
    (u.completed || []).forEach(lesson => {
      const names = { phishing: 'Phishing Awareness', password: 'Password Security', social: 'Social Engineering' };
      activities.push({ dot: 'green', text: `<strong>${u.name}</strong> completed ${names[lesson] || lesson} lesson`, time: 'Recently' });
    });
    if ((u.badges || []).length > 0) {
      activities.push({ dot: 'blue', text: `<strong>${u.name}</strong> earned ${u.badges.length} badge(s)`, time: 'Recently' });
    }
    if ((u.score || 0) === 0 && (u.completed || []).length === 0) {
      activities.push({ dot: 'amber', text: `<strong>${u.name}</strong> registered a new account`, time: 'Recently' });
    }
  });

  if (!activities.length) {
    list.innerHTML = '<div class="activity-item"><div class="a-text" style="color:#4a6280">No activity yet.</div></div>';
    return;
  }

  list.innerHTML = activities.slice(0, 8).map(a => `
    <div class="activity-item">
      <div class="a-dot ${a.dot}"></div>
      <div class="a-text">${a.text}</div>
      <div class="a-time">${a.time}</div>
    </div>`).join('');
}