document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Retrieve the stored username and password from localStorage
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            // Log the values for debugging
            console.log('Input Username:', username);
            console.log('Input Password:', password);
            console.log('Stored Username:', storedUsername);
            console.log('Stored Password:', storedPassword);

            // Validate the credentials
            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                // Redirect to a protected page or homepage
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    } else {
        console.error('Login form not found');
    }
});
