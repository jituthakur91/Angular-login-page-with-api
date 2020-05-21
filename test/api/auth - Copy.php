<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password == 'admin') {
    $_SESSION['user'] = 'admin';
    ?>
{
  "success": true,
  "secret": "This is the secret no one knows but the admin"
}
    <?php
  } else {
    ?>
{
  "success": false,
  "message": "Invalid credentials"
}
    <?php
  }
} else {
  //var_dump($_POST)
  ?>
{
  "success": false,
  "message": "Only POST access accepted"
}
  <?php
}

?>











<?php 
$token = null;
$header = apache_request_headers();

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  $request = json_decode($postdata);
  $username = $request->username;
  $password = $request->password;
  if($username=='umar' && $password=='12345'){
    echo json_encode(
      array(
        "message" => "Successful Login",
        "token" => "Bearer-jsdfnkj223",
        "email" => $username,
        // "expireAt" => $password
      ));
      http_response_code(200);
  }
  else {
    http_response_code(401);
    echo json_encode(array("message" => "Login failed."));
  }
}