<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "hello@alwaysinplus.com";
$mail2 = new PHPMailer(true);
//From email address and name
$mail2->CharSet = 'utf-8';
$mail2->From = "hello@alwaysinplus.com";
$mail2->FromName = "Message from alwaysin plus";
//To address and name

$mail2->addAddress($admin_mail);

//Send HTML or Plain Text email
$mail2->isHTML(true);

$mail2->Subject = "Message from Feedbackform";
$mail2->Body = '
        <p><i>Name</i> : <b>' . $_POST["name"] . '</b></p>
        <p><i>Phone</i> : <b>' . $_POST["phone"] . '</b></p>
        <p><i>Company</i> : <b>' . $_POST["company"] . '</b></p>
        <p><i>E-mail</i> : <b>' . $_POST["email"] . '</b></p>
        <p><i>Position</i> : <b>' . $_POST["position"] . '</b></p>
        <p><i>Message</i> : <b>' . $_POST["textarea"] . '</b></p>
        <br/>
        <sub>Send : ' . date("d-m-Y H:i:s") . '</sub>';
$mail2->AltBody = 'Name : ' . $_POST["name"] . ' | E-mail : ' . $_POST["email"] . ' | Message : ' . $_POST["textarea"];

try {
    $mail2->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail2->ErrorInfo}";
}
