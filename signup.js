document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Store the username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Sign up successful! Please login.');
        window.location.href = 'login.html';
    });
});
