<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "hello@alwaysinplus.com";
$mail4 = new PHPMailer(true);
//From email address and name
$mail4->CharSet = 'utf-8';
$mail4->From = "hello@alwaysinplus.com";
$mail4->FromName = "Message from alwaysin plus";
//To address and name

$mail4->addAddress($admin_mail);

//Send HTML or Plain Text email
$mail4->isHTML(true);

$mail4->Subject = "Message from Feedbackform";
$mail4->Body = '
        <p><i>Location</i> : <b>' . $_POST["location4"] . '</b></p>
        <p><i>Email</i> : <b>' . $_POST["email4"] . '</b></p>
        <p><i>Capacity</i> : <b>' . $_POST["capacity4"] . '</b></p>
        <p><i>Room</i> : <b>' . $_POST["room4"] . '</b></p>
        <p><i>Equipment</i> : <b>' . $_POST["equipment4"] . '</b></p>
        <p><i>Cooling</i> : <b>' . $_POST["cooling4"] . '</b></p>
        <p><i>Additional space for household</i> : <b>' . $_POST["household4"] . '</b></p>
        <p><i>Space for maintenance staff</i> : <b>' . $_POST["staff4"] . '</b></p>
        <br/>
        <sub>Send : ' . date("d-m-Y H:i:s") . '</sub>';
$mail4->AltBody = ' E-mail : ' . $_POST["email4"];

try {
    $mail4->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail4->ErrorInfo}";
}
