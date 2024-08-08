<?php
session_start();

$email = $_POST['email'];
$password = $_POST['password'];

// Validate the email and password
if (validateEmailPassword($email, $password)) {
    $_SESSION['loggedIn'] = true;
    $redirectUrl = getRedirectUrl($email);
    $_SESSION['redirect'] = $redirectUrl;
    echo json_encode(['valid' => true]);
} else {
    echo json_encode(['valid' => false]);
}

function validateEmailPassword($email, $password) {
    $accounts = [
        'z@z' => 'z',
        'a@a' => 'a',
        's@s' => 's'
    ];

    if (isset($accounts[$email]) && $accounts[$email] === $password) {
        return true;
    } else {
        return false;
    }
}

function getRedirectUrl($email) {
    $redirectUrls = [
        'z@z' => 'videos12adv.php',
        'a@a' => 'videos12gen.php'
    ];

    return $redirectUrls[$email] ?? 'videos12adv.php'; // default to videos12adv.php if no redirect URL is set

}
?>
