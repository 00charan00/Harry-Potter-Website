
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    
    const userData = JSON.parse(localStorage.getItem(username));

    if (!userData) {
        alert("User not found. Please register.");
        return;
    }

    
    if (userData.password === password) {
        // alert("Login successful!");
        console.log("Login Successful")
        window.location.href = "index.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}


function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

   
    if (localStorage.getItem(username)) {
        alert("Username is already taken. Please choose another one.");
        return;
    }

    
    const userData = { username, password };
    localStorage.setItem(username, JSON.stringify(userData));
    // alert("Registration successful! You can now log in.");
    window.location.reload();
}


document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    register();
});
