<!DOCTYPE html>
<html>
<head>
	<title>Registration</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/bootstrap-theme.min.css">
 	<link rel="stylesheet" type="text/javascript" src="submit.js">
</head>
<style type="text/css">
	#forms{
		height: 35px;
		position: relative;
		left: 70px;
		top:70px;
	}
</style>
<body>
<div class="card" style="width:45rem; height: 35rem; border:1px solid grey;position:absolute;left:20rem;top:2rem;padding:10px;">
	<div style="position:absolute;left:75px;top:140px;">
		<input type="text" class = "form-control" name="Firstname" id="Firstname" style="width:250px;" placeholder="Enter Firstname">
		<br>
		<input type="text" class = "form-control" name="lastname" id="lastname" style="width:250px;" placeholder="Enter lastname">
		<br>
		<input type="text" class = "form-control" name="age" id="age" style="width:250px;" placeholder="Enter age">
		<br>
		<input type="text" class = "form-control" name="gender" id="gender" style="width:250px;" placeholder="Enter gender">
		<br>
		<input type="text" class = "form-control" name="address" id="address" style="width:250px;position: absolute;left:300px;top:-1px;" placeholder="Enter address">
		<br>
		<input type="text" class = "form-control" name="username" id="username" style="width:250px;position: absolute;left:300px;top:60px;" placeholder="Enter username">
		<br>
		<input type="password" class = "form-control" name="password" id="password" style="width:250px;position: absolute;left:300px;top:120px;" placeholder="Enter password">
		<br>
		<input type="text" class = "form-control" name="dateofregistration" id="date" style="width:250px;position: absolute;left:300px;top:185px;" placeholder="Enter date of registration">
		<br>
		<input type="text" class = "form-control" name="position" id="position" style="width:250px;position: absolute;top:255px;" placeholder="Enter position">
		<input type="button"  class="btn btn-success" name="submit" id="submit" style="background-color:#6a7cae; border-color:#586ca3;position:absolute;top:350px;left:80px;width:200px;" onclick="submit()" value="submit">
		<a href='login.php'><input type="button"  class="btn btn-success" name="submit" id="submit" style="background-color:#6a7cae; border-color:#586ca3;position:absolute;top:350px;left:300px;width:150px;" value="login"></a>
	</div>
</div>
<img src="images/logos.png" style="width:70px;height:70px;position:absolute;left:520px;top:60px;">
<h1 style="position: absolute;left: 600px; top:60px;">Registration</h1>
</body>
</html>
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAscG0jHBul7C-4Q1LjSFhNPv0wcLUqvkA',
    authDomain: 'guardlogs-9d2fe.firebaseapp.com',
    databaseURL: 'https://guardlogs-9d2fe.firebaseio.com',
    projectId: 'guardlogs-9d2fe',
    storageBucket: 'guardlogs-9d2fe.appspot.com',
    messagingSenderId: '1015271803255'
  };
  firebase.initializeApp(config);
</script>
<script type='text/javascript'>
	function submit(){		
	var Firstname = document.getElementById('Firstname').value;
	var a = document.getElementById('Firstname');
	var lastname = document.getElementById('lastname').value;
	var b = document.getElementById('lastname');
	var age = document.getElementById('age').value;
	var c = document.getElementById('age');
	var gender = document.getElementById('gender').value;
	var d = document.getElementById('gender');
	var address = document.getElementById('address').value;
	var e = document.getElementById('address');
	var username = document.getElementById('username').value;
	var f = document.getElementById('username');
	var password = document.getElementById('password').value;
	var g = document.getElementById('password');
	var date = document.getElementById('date').value;
	var h = document.getElementById('date');
	var position = document.getElementById('position').value;
	var i = document.getElementById('position');
	var okay = '';
	if (Firstname=='') {
		a.style.borderColor='red';
	}
	if (lastname=='') {
		b.style.borderColor='red';
	}
	if (age=='') {
		c.style.borderColor='red';
	}
	if (gender=='') {
		d.style.borderColor='red';
	}
	if (address=='') {
		e.style.borderColor='red';
	}
	if (username=='') {
		f.style.borderColor='red';
	}
	if (password=='') {
		g.style.borderColor='red';
	}
	if (date=='') {
		h.style.borderColor='red';
	}
	if (position=='') {
		i.style.borderColor='red';
	}
	else{
		var firebaseRef = firebase.database().ref('/GuardsInfo');
		firebaseRef.push({
		Firstname:Firstname,
		Lastname:lastname,
		Age:age,
		Gender:gender,
		Address:address,
		Username:username,
		Password:password,
		DateOfRegistration:date,
		Position:position,
	});
		var firebaseRef = firebase.database().ref('/Users');
		firebaseRef.push({
			Username:username,
			Password:password,
	});
		okay = true;
		if (okay==true) {
			window.alert('Data save ! You can now login');
		}
	}
}
</script>
