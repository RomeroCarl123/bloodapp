// Placeholder script for public site
document.addEventListener("DOMContentLoaded", function () {
  // attach scroll listener to toggle header shadow
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Login handler - POST to API
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        return alert("Please fill all fields");
      }

      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
          window.location.href = "/";
        } else {
          alert("Login failed: " + data.error);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
  }

  // Register handler - POST to API
  const registerForm = document.getElementById("registration-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const fullName = document.getElementById("reg-fullName").value;
      const email = document.getElementById("reg-email").value;
      const bloodType = document.getElementById("reg-bloodType").value;
      const password = document.getElementById("reg-password").value;

      if (!fullName || !email || !bloodType || !password) {
        return alert("Please fill all fields");
      }

      if (password.length < 6) {
        return alert("Password must be at least 6 characters");
      }

      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, bloodType, password }),
        });

        const data = await response.json();

        if (data.success) {
          // clear any existing token - user must now log in
          localStorage.removeItem("token");
          alert("Account created! Please log in with your new credentials.");
          // redirect to login page instead of home
          window.location.href = "/login";
        } else {
          alert("Registration failed: " + data.error);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
  }
});
