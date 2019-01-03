var firebaseRef = firebase.database().ref('/GuardsInfo');
firebaseRef.push({
    Firstname: Firstname,
    Lastname: lastname,
    Age: age,
    Gender: gender,
    Address: address,
    Username: username,
    Password: password,
    DateOfRegistration: date,
    Position: position,
});
var firebaseRef = firebase.database().ref('/Users');
firebaseRef.push({
    Username: username,
    Password: password,
});
window.alert('Data is saved you can now login');
	}