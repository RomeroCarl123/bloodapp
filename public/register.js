module.exports = function renderRegister() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>LifeLine — Register</title>
    <link rel="stylesheet" href="/styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <main class="auth-page">
      <div class="deco-blob deco-1"></div>
      <div class="deco-blob deco-2"></div>
      <div class="deco-shape deco-3"></div>
      
      <div class="container">
        <div class="registration-card">
          <h2 class="auth-title">Create an Account</h2>
          <p class="auth-subtitle">Join our community of life-saving donors.</p>
          
          <form id="registration-form">
            <div class="form-group">
              <label for="reg-fullName">Full Name</label>
              <input type="text" id="reg-fullName" placeholder="John Doe" required />
            </div>
            
            <div class="form-group">
              <label for="reg-email">Email Address</label>
              <input type="email" id="reg-email" placeholder="john@example.com" required />
            </div>

            <div class="form-group">
              <label for="reg-bloodType">Blood Type</label>
              <input type="text" id="reg-bloodType" placeholder="e.g., O+, A-, B+" required />
            </div>

            <div class="form-group">
              <div class="label-row">
                <label for="reg-password">Password</label>
              </div>
              <input type="password" id="reg-password" placeholder="••••••••" required />
            </div>
            
            <button type="submit" class="btn-signin">Register Now</button>
          </form>
          
          <div class="divider"><span>Or Register with</span></div>

          <div class="social-grid">
            <button class="social-item"><img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt=""> Google</button>
            <button class="social-item">🍎 Apple ID</button>
            <button class="social-item">📘 Facebook</button>
          </div>
          
          <div class="auth-footer">
            <p>Already have an account? <a href="/login" class="link-red">Log In</a></p>
            <p><a href="/" class="link-home">Back to home</a></p>
          </div>
        </div>
      </div>
    </main>
    
    <script src="/script.js"></script>
  </body>
</html>`;
};
