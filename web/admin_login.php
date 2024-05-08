<?php
/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_empid = ($data->email);
$get_password = ($data->password);

if(empty($get_empid) || empty($get_password))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysqli_query($conn,"SELECT * FROM admin_login WHERE email = '$get_empid' AND password = '$get_password'");

		if (mysqli_num_rows($result))
		{
			$Allresponse = mysqli_fetch_array($result);
			// temp user array
			$response = array();
			$response = $Allresponse;
			$response["success"] = 1;	
			echo json_encode($response);
		} 
		else
		{
			// success	
			$response["success"] = 0;
			// echoing JSON response
			echo json_encode($response);
		}
}
?>