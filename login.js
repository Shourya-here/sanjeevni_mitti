document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
      alert(`Logged in as ${email}`);
      // Here you would normally send a request to your backend for authentication
    } else {
      alert('Please enter valid credentials.');
    }
  });
  
  function googleLogin() {
    // This function would normally initiate Google OAuth login
    alert('Google Login Clicked');
    // Here you would trigger Google Sign-In flow using Firebase or OAuth
  }
  