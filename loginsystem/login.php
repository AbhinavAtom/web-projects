<?php

    $login = false;
    $showError = false;
    if($_SERVER["REQUEST_METHOD"] == "POST")  {
        
        include 'partials/_dbconnect.php';
        $username = $_POST["username"];
        $password = $_POST["password"];

        // $sql = "SELECT * FROM `users` WHERE `username`= '$username' AND `password` = '$password'";
        $sql = "SELECT * FROM `users` WHERE `username`= '$username'";
        $result = mysqli_query($conn, $sql);
        $num = mysqli_num_rows($result);

        if($num == 1) {
            while($row = mysqli_fetch_assoc($result)) {
              if(password_verify($password, $row['password'])) {
                $login = true;
                session_start();
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $username;
                header("location: welcome.php");
              } else {
                $showError = "Invalid Credentials!";      
              }
            }
        }
        else {
          $showError = "Invalid Credentials!";
        }
        
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="sign-in-section section">
        <form action="login.php" method="post">
                <!-- <div class="company-name">Codika</div> -->
                <div class="details">
                        <?php
                            if($login) {
                                echo '<div class="details-sign-in warning-success">Success! You are loggedin.</div>';
                            }

                            if($showError) {
                                echo '<div class="details-sign-in warning-danger">Error! '  . $showError. ' </div>';
                            }

                        ?>
                    <div class="detail-sign-in sign-in-text">Sign in to Account</div>
                    <div class="detail-sign-in linear-dividor"></div>
                    <div class="detail-sign-in details-input">
                        <input  class="box-input"  type="text" name="username" id="username" placeholder="Username">
                        <input  class="box-input"  type="password" name="password" id="password" placeholder="Password">
                    </div>
                    <div class="detail-sign-in details-check-forgot">
                        <span>
                            <input type="checkbox" name="remember-me" id="remember-me">&nbsp;
                            <label for="remember-me">Remember me</label>
                        </span>
                        <span>Forgot Password?</span>
                    </div>
                    <div class="detail-sign-in">
                        <button type="submit" class="sign-in-btn">Sign In</button>
                    </div>
                    <div class="details-sign-in policy-text">
                        Privacy Policy &nbsp;&nbsp; ● &nbsp;&nbsp;Terms & Conditions
                    </div>
                </div>
            </form>
        </div>
        <div class="sign-up-section section">
           <!-- <form action="signup.php" method="POST"> -->
            <div class="details">
                    <div class="details-sign-up hello-friend">Hello, Friend!</div>
                    <div class="details-sign-up linear-dividor linear-dividor-sign-up"></div>
                    <div class="details-sign-up sign-up-small-detail">Fill up personal information and start journey with us.</div>
                    <div class="details-sign-up"><button class="sign-up-btn" type="submit"><a href="signup.php">Sign Up</a></button></div>
                </div>
           <!-- </form> -->
        </div>
    </div>
</body>
</html>