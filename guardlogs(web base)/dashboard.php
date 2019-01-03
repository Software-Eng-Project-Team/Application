<!DOCTYPE html>
<html>
<head>
	<title>Dashboard</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
 	<link rel="stylesheet" type="text/javascript" src="submit.js">
 </head>
 <style type="text/css">
 	.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
 </style>
<body>
<div class='header' style="background-color:#6a7cae; height:60px;">
	<img src="images/logos.png" style="width:50px;height:50px;position:absolute;left:10px;top:5px;">
	<p style="font-size:40px;font-family:arial black;position:absolute;left:70px;color:white;">GuardLogs</p>
	<a href="Aboutus.php" style="position:absolute;left:1020px;top:20px;color:white;font-size:20px;font-family:arial black;">About us</a>
	<a href="Record.php" style="position:absolute;left:840px;top:20px;color:white;font-size:20px;font-family:arial black;">View records</a>
	<a href="dashboard.php" style="position:absolute;left:740px;top:20px;color:white;font-size:20px;font-family:arial black;">Home</a>
	<div class="dropdown" style="position:absolute;left:1150px;top:20px;">
	  <span style="font-size:20px;font-family:arial black;color:white;">Account</span>
	  <div class="dropdown-content">
	  <p id="users"></p>
	  <a href="logout.php">logout</a><br>
	  <a href="guardlist.php">Guards list</a>
	  </div>
	</div>
</div>
<img src="images/background.jpg" width='1366' height="542">
<div class="footer" style="position:fixed;left:0%;bottom:0%;width:100%;background-color:#6a7cae;height:7%;padding:10px;font-family:arial black;color:white;">copyright 2018
</div>

<div>
	<p style="font-family:arial black; font-size:40px; left:100px;position:absolute;top:100px;">Welcome to GuardLogs !</p>
	<p id="username" style="font-family:arial black;font-size:40px;position:absolute;left:500px;top:170px;"></p>
	<p>
		<script type="text/javascript">
			var a = document.getElementById("username").innerHTML = sessionStorage.getItem("username");
			var b = document.getElementById("users").innerHTML = 'Logged as :'+' ' + sessionStorage.getItem("username");
		</script>
	</p>
</div>
<img src="images/folder.png" width="500" height="400" style="position:absolute;top:100px;left:800px;">
<div class="card" style="width:400px;height:270px;position:absolute;top:210px;left:850px;background-color:#6a7cae;padding:10px;">
	<p style="color:white;font-size:20px;position:absolute;top:70px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Human security depends on a system where each rational individual calculates that it is more profitable not to rebel.</p>
</div>
</body>
</html>
<script type="text/javascript">
	if (sessionStorage.getItem("username")==null){
		window.location.assign('login.php')
	}
</script>