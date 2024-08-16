const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const rememberMeCheckbox = document.getElementById('remember-me');

// Define a simple user database
const users = [
  { email: 'a@z', password: 'a', redirect: 'videos12adv.html' },
  { email: 'h@z', password: 'h', redirect: 'videos12gen.html' }
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = rememberMeCheckbox.checked;

  // Check if the email and password fields are empty
  if (email === '' || password === '') {
    errorMessage.textContent = 'Please fill in all fields';
    return;
  }

  // Find the user in the database
  const user = users.find((user) => user.email === email);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    // Store the user data in local storage
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('user', JSON.stringify(user));
    }
    // If the user is authenticated, redirect to the specified page
    window.location.href = user.redirect;
  } else {
    errorMessage.textContent = 'Invalid email or password';
  }
});

// Add event listener to remember-me checkbox
rememberMeCheckbox.addEventListener('change', () => {
    if (rememberMeCheckbox.checked) {
      document.getElementById('email').autocomplete = 'on';
      document.getElementById('password').autocomplete = 'on';
    } else {
      document.getElementById('email').autocomplete = 'none';
      document.getElementById('password').autocomplete = 'none';
    }
  });

// Check if user has previously logged in and remembered
if (localStorage.getItem('email') && localStorage.getItem('password')) {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    // Autofill the email and password fields
    document.getElementById('email').value = storedEmail;
    document.getElementById('password').value = storedPassword;
    
    // Set autocomplete to "on" for both fields
    document.getElementById('email').autocomplete = 'on';
    document.getElementById('password').autocomplete = 'on';
    
    rememberMeCheckbox.checked = true;
  }

  document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
