<?php
session_start();

if (!isset($_SESSION['loggedIn']) || !$_SESSION['loggedIn']) {
    header('Location: login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MoTaha •12Gen Lessons•</title>
    <link rel="icon" href="icon1.JPG">
    <link rel="stylesheet" href="videos.css">
</head>
<body oncontextmenu="return false" onkeydown="preventDefault(event)">

<script>
  function preventDefault(e) {
    if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
    }
  }
</script>    
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
    <main class="container">
        <section class="main-video">
            <video src="manipulate text background.mp4" controls autoplay controlsList="nodownload" ></video>
            <h3 class="title">Introduction</h3>

        </section>

        <section class="video-playlist">
            <h3 class="title">Term 1 Lessons</h3>
            <p>31 lessons &nbsp; . &nbsp; 50m 48s</p>
            <div class="videos">

            </div>
        </section>
    </main>
    <script src="videos12gen.js"></script>
</body>
</html>