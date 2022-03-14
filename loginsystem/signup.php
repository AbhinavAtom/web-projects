<?php

    $showAlert = false;
    $showError = false;
    if($_SERVER["REQUEST_METHOD"] == "POST")  {
        
        include 'partials/_dbconnect.php';
        $username = $_POST["username"];
        $password = $_POST["password"];
        $cpassword = $_POST["cpassword"];
        
        // password and cpassword must be same and username must not exist to the table
        //check whether this username exist
        $existSql = "SELECT * FROM `users` WHERE `username` = '$username'";
        $result = mysqli_query($conn, $existSql);
        $numExistRows = mysqli_num_rows($result);

        if($numExistRows > 0){
            $showError = "Username already exist";
        } else {
            if(($password == $cpassword)){
                $hash = password_hash($password, PASSWORD_DEFAULT);
                $sql = "INSERT INTO `users` (`username`, `password`, `dt`) VALUES ('$username', '$hash', current_timestamp());";
                $result = mysqli_query($conn, $sql);
                if($result) {
                    $showAlert = true;
                }
            } else {
                $showError = "Password do not match";
            }
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
    <title>Sign up</title>
</head>
<body>
    <div class="container">
        <div class="sign-in-section section">
        <form action="signup.php" method="post">
                <div class="details">
                        <?php
                            if($showAlert) {
                                echo '<div class="details-sign-in warning-success">Success! Your accound is created.</div>';
                            }

                            if($showError) {
                                echo '<div class="details-sign-in warning-danger">Error! '  . $showError . '</div>';
                            }

                        ?>
                    <div class="detail-sign-in sign-in-text">Sign up to Connect with us</div>
                    <div class="detail-sign-in linear-dividor"></div>
                    <div class="detail-sign-in details-input">
                        <input  class="box-input"  type="text" name="username" id="username" placeholder="Username">
                        <input  class="box-input"  type="password" name="password" id="password" placeholder="Password">
                        <input  class="box-input"  type="password" name="cpassword" id="cpassword" placeholder="Confirm Password">
                    </div>
                    <div class="detail-sign-in">
                        <button type="submit" class="sign-in-btn">Sign Up</button>
                    </div>
                    <div class="details-sign-in policy-text">
                        Privacy Policy &nbsp;&nbsp; ● &nbsp;&nbsp;Terms & Conditions
                    </div>
                </div>
            </form>
        </div>
        <div class="sign-up-section section">
           <!-- <form action="login.php" method="POST"> -->
            <div class="details">
                    <div class="details-sign-up hello-friend">Hello, Friend!</div>
                    <div class="details-sign-up linear-dividor linear-dividor-sign-up"></div>
                    <div class="details-sign-up sign-up-small-detail">Just fill up your login details and again connect with us.</div>
                    <div class="details-sign-up"><button class="sign-up-btn" type="submit"><a href="login.php">Sign In</a></button></div>
                </div>
           <!-- </form> -->
        </div>
    </div>
</body>
</html>