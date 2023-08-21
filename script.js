document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you can add your authentication logic
    // For demonstration purposes, let's just display an alert
    
    if (username === 'user' && password === 'pass') {
        alert('Login successful');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
