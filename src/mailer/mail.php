<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "hello@alwaysinplus.com";
//Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
//From email address and name
    $mail->CharSet = 'utf-8';
    $mail->From = "hello@alwaysinplus.com";
    $mail->FromName = "Message from alwaysin plus";
//To address and name

    $mail->addAddress($admin_mail);

//Send HTML or Plain Text email
    $mail->isHTML(true);

    $mail->Subject = "Message from Feedbackform";
    $mail->Body = '
        <p><i>Name</i> : <b>' . $_POST["name1"] . '</b></p>
        <p><i>Phone</i> : <b>' . $_POST["phone1"] . '</b></p>
        <p><i>Company</i> : <b>' . $_POST["company1"] . '</b></p>
        <p><i>E-mail</i> : <b>' . $_POST["email1"] . '</b></p>
        <p><i>Website</i> : <b>' . $_POST["website1"] . '</b></p>
        <p><i>line of work</i> : <b>' . $_POST["line1"] . '</b></p>
        <p><i>energy consumption</i> : <b>' . $_POST["energy1"] . '</b></p>
        <p><i>location of the object</i> : <b>' . $_POST["location1"] . '</b></p>
        <p><i>type of work</i> : <b>' . $_POST["work1"] . '</b></p>
        <br/>
        <sub>Send : ' . date("d-m-Y H:i:s") . '</sub>';
    $mail->AltBody = 'Name : ' . $_POST["name1"] . ' | E-mail : ' . $_POST["email1"];

    try {
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
