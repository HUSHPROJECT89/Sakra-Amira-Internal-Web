// admin.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      const admins = [
        { user: "admin1", pass: "123" },
        { user: "admin2", pass: "admin" },
        { user: "admin3", pass: "rahasia" }
      ];

      const valid = admins.some(admin => admin.user === username && admin.pass === password);

      if (valid) {
        localStorage.setItem("admin_logged_in", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }

  // Auto-redirect jika sudah login
  if (localStorage.getItem("admin_logged_in") === "true") {
    if (window.location.pathname.includes("index.html")) {
      window.location.href = "dashboard.html";
    }
  }
});
