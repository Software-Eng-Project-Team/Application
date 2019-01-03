<!DOCTYPE html>
<html>
<head>
	<title>login</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
 	<link rel="stylesheet" type="text/javascript" src="submit.js">
</head>
<body>
<div class="card" style="width:400px;height:500px;border-color: grey;position:absolute;left:500px;top:50px;">
	<img src="images/logos.png" style="width:120px;height:120px;position:absolute;left:140px;top:20px;">
	<p style="position:absolute;top: 150px;left:120px;"	>Welcome to Guardlogs</p>
	<p style="position:absolute;top: 180px;left:140px;"	>- please login -</p>
	<input type="text" class="form-control" name="username" id="username" placeholder="Enter username" style="width:250px;height:50px;top: 240px;position:absolute;left:70px;">
	<input type="password" class="form-control" name="password" id="password" placeholder="Enter password" style="width:250px;height:50px;top: 300px;position:absolute;left:70px;">
	<input type="button" class="btn btn-success" name="login" onclick="login()" value="login" style="width:200px;position:absolute;top:420px;left:100px;background-color: #6a7cae">
	<a href="register.php" style="position:absolute;top:370px;left:70px;">Register for account</a>
</div>
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
	function login(){
		var usernames = document.getElementById('username').value;
		a=document.getElementById('username');
		var passwords = document.getElementById('password').value;
		b=document.getElementById('password');
		var okay;
		if (username == '') {
			a.style.borderColor='red';
		}
		if (password == '') {
			b.style.borderColor='red';
		}else{
			var ref = firebase.database().ref('GuardsInfo');
				ref.on('value',(data) => {
					var username = data.val();
					var position = data.val();
					var password = data.val();
					var keys = Object.keys(username);
					var keys = Object.keys(position);
					var keys = Object.keys(password);
					for (var n=0; n<keys.length; n++){
						var k = keys[n];
						var user = username[k].Username;
						var pos = position[k].Position;
						var pass = password[k].Password;

						if (usernames==username[k].Username) {
							if (passwords == password[k].Password){
								if (pos=='Security Head'){
									window.alert('Successfully Login');
									okay=true;
									console.log(user,pass,pos,okay);
									{break};
								}
							}
						}else{
							okay=false;
							console.log(okay)
						}
					}
					if (okay==false){
						window.alert('Invalid Input');
						location.reload();
					}else{
						window.location.assign('dashboard.php');
						sessionStorage.setItem("username", user);
						

					}
				})	
			}
	}
</script>
</body>
</html>
