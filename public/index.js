module.exports = function renderIndex() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>LifeLine | Blood Donation</title>
    <link rel="stylesheet" href="/styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav-container">
        <div class="logo-area">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e53935'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E" alt="logo" class="header-logo-img" />
          <h1 class="logo">Blood Donation</h1>
        </div>
        <nav class="nav">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <h2>Save Lives Through Blood Donation</h2>
            <p>
              Manage your blood donations, schedule appointments, and track your
              donation history all in one place. Join our community of
              life-saving donors today.
            </p>
            <a class="btn btn-primary" href="/login">Get Started</a>
          </div>
          <div class="hero-image-container">
            <div class="circle-graphic">
              <div class="drop-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="blood-drop-svg">
                  <path d="M12 22c4.418 0 8-3.582 8-8 0-4.42-8-12-8-12S4 9.58 4 14c0 4.418 3.582 8 8 8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services-section">
        <div class="container">
          <h3 class="section-title">Why Choose Our Platform?</h3>
          <div class="card-grid">
            <div class="card">
              <div class="icon-box">
                <span class="icon-red">📅</span>
              </div>
              <h4>Easy Scheduling</h4>
              <p>
                Book your donation appointments with just a few clicks. Choose
                your preferred date, time, and location.
              </p>
            </div>
            <div class="card">
              <div class="icon-box">
                <span class="icon-red">❤️</span>
              </div>
              <h4>Track Your Impact</h4>
              <p>
                View your complete donation history and see how many lives
                you've helped save through your contributions.
              </p>
            </div>
            <div class="card">
              <div class="icon-box">
                <span class="icon-red">👥</span>
              </div>
              <h4>Community Support</h4>
              <p>
                Join thousands of donors in our community and receive reminders
                about eligibility and upcoming drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rules" class="services-section rules-section">
        <div class="container">
          <h3 class="section-title">Blood Donation Rules</h3>
          <div class="card-grid">
            <div class="card">
              <div class="icon-box">✅</div>
              <h4>Age Requirement</h4>
              <p>Donors must be between 17 and 65 years old.</p>
            </div>
            <div class="card">
              <div class="icon-box">💉</div>
              <h4>Weight</h4>
              <p>Donors should weigh at least 50 kg (110 lbs) for safety.</p>
            </div>
            <div class="card">
              <div class="icon-box">🕒</div>
              <h4>Donation Interval</h4>
              <p>Whole blood donation should be at least 12 weeks apart.</p>
            </div>
            <div class="card">
              <div class="icon-box">🍎</div>
              <h4>Health Conditions</h4>
              <p>Donors must be in good health and free from infections.</p>
            </div>
            <div class="card">
              <div class="icon-box">🚫</div>
              <h4>Medication & Travel</h4>
              <p>Certain medications or recent travel may temporarily prevent donation.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <div class="red-card">
            <h3>Ready to Save Lives?</h3>
            <p>
              Join our blood donation platform and make a difference in your
              community. Every donation counts.
            </p>
            <a href="/login" class="btn btn-white">Start Donating Today</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-content">
        <p>© 2026 Blood Donation & Inventory Management System. All rights reserved.</p>
      </div>
    </footer>

    <script src="/script.js"></script>
  </body>
</html>`;
};