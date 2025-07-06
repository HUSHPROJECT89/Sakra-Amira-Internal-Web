// admin.js
function loginAdmin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const allowed = {
    'admin1': '123',
    'admin2': '456',
    'fariz': 'sakra'
  };

  if (allowed[user] && allowed[user] === pass) {
    localStorage.setItem('admin_logged_in', user);
    window.location.href = 'dashboard.html';
    return false;
  } else {
    document.getElementById('error').textContent = 'Login gagal! Coba lagi.';
    return false;
  }
}

// Auto-redirect jika tidak login dan buka dashboard/data
if (['dashboard.html', 'data.html'].some(p => location.pathname.endsWith(p))) {
  const admin = localStorage.getItem('admin_logged_in');
  if (!admin) {
    window.location.href = 'index.html';
  }
} else if (location.pathname.endsWith('dashboard.html')) {
  document.querySelector('h2')?.insertAdjacentHTML('afterend', `<p>Halo, <b>${localStorage.getItem('admin_logged_in')}</b></p>`);
}
