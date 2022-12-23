<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
    $studentid = $_POST['studentid'];
    $phoneno = $_POST['phoneno'];
	$password = $_POST['password'];
	$cpassword = $_POST['cpassword'];

	// Database connection
	$conn = new mysqli('localhost','root','','LearnEd');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, email, studentid, phoneno,password, cpassword) values(?, ?, ?, ?, ?, ?,?)");
		$stmt->bind_param("sssssi", $firstName, $lastName, $email, $studentid, $phoneno, $password, $cpassword);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>