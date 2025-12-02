// Simple login validation demo

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Demo valid credentials (you can adjust these)
    const validUsername = "klintvillarin24@gmail.com";
    const validPassword = "password123";

    if(usernameInput === validUsername && passwordInput === validPassword) {
        alert("Login Successful! Welcome to Kawasaki.");
        // 
        window.location.href = "netpage.html";
    } else {
        alert("Invalid username or password.");
    }
});