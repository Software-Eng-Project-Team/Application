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
	});