<?php

  session_start();

  if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] != true) {
    header("location: login.php");
    exit;
  }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/nav.css">
    <link rel="stylesheet" href="css/welcome.css">
    <title>Welcome <?php echo $_SESSION['username'] ?></title>
</head>
<body>
    <nav>
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">Articles</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="login.php" class="logout-item">Logout</a></li>
        </ul>
    </nav>


    <div class="main">
        <h1 class="class-heading">Welcome <?php echo $_SESSION['username'] ?> 👋</h1>
        <div class="divider"></div>
        <div class="message">
            <p>This is the login system demo site using PHP as backend.<br>
               I am Still working with this site to add content...
            </p>
        </div>
    </div>
</body>
</html>