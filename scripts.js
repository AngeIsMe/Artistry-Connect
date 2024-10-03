//SCRIPT FOR LOGIN,SIGNUP, FORGOT PW, RESET PW

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const eyeIcon = input.nextElementSibling.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye'); // Open eye icon 
    } else {
        input.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash'); // Closed eye icon 
    }
}

// Sign Up Form
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const errorMsg = document.getElementById("error-msg");

    
    const contactPattern = /^\d+$/;
    if (!contactPattern.test(contactNumber)) {
        errorMsg.textContent = "Please enter valid contact number";
        return;
    }

    
    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        return;
    }

    
    if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters long!";
        return;
    }

    errorMsg.textContent = "";

    // Store user details in localStorage for login validation
    localStorage.setItem('userUsername', username);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userContact', contactNumber);

    this.submit(); // Submit the form after validation
});

// Validate Login Form
function validateLogin(e) {
    e.preventDefault();

    const loginUsername = document.getElementById("username").value; // Use username for login
    const loginPassword = document.getElementById("loginPassword").value;
    const errorMsg = document.getElementById("login-error-msg");

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('userUsername');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if the input matches the stored data
    if (loginUsername !== storedUsername || loginPassword !== storedPassword) {
        errorMsg.textContent = "Invalid username or password!";
    } else {
        errorMsg.textContent = "";
        
        alert("Login successful!"); // Placeholder for successful login
        // Optionally submit the form if needed
        // document.getElementById("loginForm").submit();
    }
}

// Forgot Password Form
document.getElementById("forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("forgotEmail").value;
    const message = document.getElementById("forgot-msg");

    // Check if the email is valid (simple validation)
    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    // Simulate sending a reset password email (in practice, this should be handled by the backend)
    message.textContent = "Please check your email for the password reset link.";
});
