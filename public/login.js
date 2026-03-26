module.exports = function renderLogin() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>LifeLine — Login</title>
    <link rel="stylesheet" href="/styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <main class="auth-page">
      <div class="deco-blob deco-1"></div>
      <div class="deco-blob deco-2"></div>
      <div class="deco-shape deco-3"></div>
      
      <div class="container">
        <div class="auth-card">
          <h2 class="auth-title">Sign in to LifeLine</h2>
          <p class="auth-subtitle">Enter your credentials to access your donor dashboard.</p>

          <form id="login-form">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="name@example.com" required />
            </div>
            
            <div class="form-group">
              <div class="label-row">
                <label for="password">Password</label>
              </div>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>

            <button class="btn-signin" type="submit">Sign in</button>
          </form>

          <div class="divider"><span>Or Sign in with</span></div>

          <div class="social-grid">
            <button class="social-item"><img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt=""> Google</button>
            <button class="social-item">🍎 Apple ID</button>
            <button class="social-item">📘 Facebook</button>
          </div>

          <div class="auth-footer">
            <p>Don't have an account? <a href="/register" class="link-red">Request Now</a></p>
            <p><a href="/" class="link-home">Back to home</a></p>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>`;
};
