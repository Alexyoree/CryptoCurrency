document.addEventListener('DOMContentLoaded', (event) => {
    const viewMoreButton = document.querySelector('.view-more button');
    const loginButton = document.querySelector('.login .login-btn');
    const signupButton = document.querySelector('.login .signup');

    viewMoreButton.addEventListener('click', () => {
        window.location.href = 'crypto.html';
    });

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    signupButton.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
});
const username = localStorage.getItem('username');
if (username) {
    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
} else {
    window.location.href = 'login.html';
}