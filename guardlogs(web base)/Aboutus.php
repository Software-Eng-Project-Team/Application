<script type="text/javascript">
	if (sessionStorage.getItem("username")==null){
		window.location.assign('login.php')
	}
</script>
<!DOCTYPE html>
<html>
<head>
	<title>About us</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
 	<link rel="stylesheet" type="text/javascript" src="submit.js">
</head>
<body>
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
<p style="position: absolute;top:230px;left:290px;font-size:20px;">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guard Logs is a software system which aims to modernize the Logging System of Security Guards.<br>Guard Logs presents a system that will help this demographic to tally and view their daily logs in a <br>paperless and automatically organized way.
</p>
<img src="images/background.jpg" width='1366' height="542">
<div class="footer" style="position:fixed;left:0%;bottom:0%;width:100%;background-color:#6a7cae;height:7%;padding:10px;font-family:arial black;color:white;">copyright 2018
</div>
<div>
	<p>
		<script type="text/javascript">
			var b = document.getElementById("users").innerHTML = 'Logged as :'+' ' + sessionStorage.getItem("username");
		</script>
	</p>
</div>

</body>
</html>