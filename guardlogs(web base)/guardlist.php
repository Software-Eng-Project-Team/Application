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
	  <a href="logout.php">logout</a> <br>
	  <a href="guardlist.php">Guards list</a>
	  </div>
	</div>
</div>
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
<div>
	<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAscG0jHBul7C-4Q1LjSFhNPv0wcLUqvkA",
    authDomain: "guardlogs-9d2fe.firebaseapp.com",
    databaseURL: "https://guardlogs-9d2fe.firebaseio.com",
    projectId: "guardlogs-9d2fe",
    storageBucket: "guardlogs-9d2fe.appspot.com",
    messagingSenderId: "1015271803255"
  };
  firebase.initializeApp(config);
</script>
<script type="text/javascript">
	var ref = firebase.database().ref('GuardsInfo');
				ref.once('value',(data) => {
					var guard = data.val();
					var name = data.val();
					var keys = Object.keys(guard);
					var keys = Object.keys(name);
					for (var n=0; n<keys.length; n++){
						var k = keys[n];
						var guards = guard[k].Position;
						
						
						if (guards=='guard') {
							var names = name[k].Firstname;
							var guards = guard[k].Position;
							console.log(names,guards);

							var show = names + '<br>' + '<br>'+ "<div class='card'></div>"+'<br>';
							var show2 = guards + '<br>' + '<br>'+ "<div class='card'></div>"+'<br>';

							document.getElementById('show') . innerHTML += show;
							document.getElementById('show2') . innerHTML += show2;
						}
					}
				})	
		
</script>
<table class="table" style="position:absolute;top:60px;" id="table">
    <tr>
      <th>Name </th>
      <th>Position</th>
      
    </tr>
    <td id="show"></td>
    <td id="show2"></td>
   
</table>
</div>
</body>
</html>