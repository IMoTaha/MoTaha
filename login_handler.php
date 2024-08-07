<?php
session_start();

if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn']) {
    $redirect = $_SESSION['redirect'];
    unset($_SESSION['redirect']);
    header('Location: ' . $redirect);
    exit;
} else {
    header('Location: login.html');
    exit;
}
