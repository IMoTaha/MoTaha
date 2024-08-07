<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta https-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="icon1.JPG">
    <link rel="stylesheet" href="login.css">
    <title>MoTaha •Login•</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
    <body oncontextmenu="return false">
        <!-- header design -->
         <header class="header">
            <a href="#" class="logo"> MoTaha <span class="animate" style="--i:1;"></span></a>
            <div class="bx bx-menu" id="menu-icon">
                <i class="fa-solid fa-bars" onclick="toggleMenu()"></i>
            </div>
    
            <nav class="navbar">
                <a href="home2.html#home" class="active">Home</a>
                <a href="home2.html#about">About</a>
                <a href="home2.html#features">Features</a>
                <a href="contact.html">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
                <span class="active-nav"></span>
                <span class="animate" style="--i:2;"></span>
            </nav>
         </header>
</body>
<body>
     <!--page1-->
    <section>
    <div class="login-box" id="login_box">
        <form id="login-form" action="" method="get">
            <h2>Login</h2>
            <div id="errorMessage"></div> <!-- Error message element -->
            <div id="successMessage"></div> <!-- Success message element -->
            <!-- Rest of the login form -->
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" id="email" required>
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" id="password" required>
                <label>Password</label>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" name="Stay_Login">remember me</label>
                <a href="Fpassword.html">Forgot Password?</a>
            </div>
            <button type="submit" id="login-btn">Login</button>
            <div id="error-message"></div>
            <script>
                document.getElementById("login-btn").addEventListener("click", LoginUser);
            </script>
            <div class="register-link">
                <p>Don't have an account?<a href="Register.html">  Register</a></p>
            </div>
        </form>
        </div>
</section>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>
</html>

<script>
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send an AJAX request to validate the email and password
        fetch('validate1.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${password}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                // Redirect to login_handler.php
                window.location.href = 'login_handler.php';
            } else {
                errorMessage.textContent = 'Invalid email or password.';
            }
        });
    });
</script>