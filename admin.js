
const admins = [
  { username: "admin1", password: "admin123" },
  { username: "admin2", password: "sakura456" },
  { username: "fariz", password: "twin98" },
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const found = admins.find(admin => admin.username === username && admin.password === password);

  if (found) {
    localStorage.setItem("admin_logged_in", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").innerText = "Username atau password salah!";
  }
});
