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
$get_field_3 = ($data->field_3);
$get_field_4 = ($data->field_4);

if(empty($get_empid) || empty($get_password))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysqli_query($conn,"SELECT * FROM user_login WHERE (email = '$get_empid' AND field_3= '$get_field_3'  AND field_4= '$get_field_4' )");

		if ($result)
		{
			$result = mysqli_query($conn,"update user_login set password = '$get_password' where email = '$get_empid'");
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