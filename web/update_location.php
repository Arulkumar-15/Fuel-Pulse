<?php
/***************************
****  ***
****************************/

/* Following register will admin login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


$data = json_decode(file_get_contents("php://input"));
$get_id = ($data->email);
$get_field_1 = ($data->field_1);
$get_field_2 = ($data->field_2);
$get_create_date = date('Y-m-d');


	$result1 = mysqli_query($conn,"UPDATE business SET
		field_10='$get_field_1', field_11='$get_field_2' WHERE cus_id = '$get_id'");

	// check for empty result
	if($result1)
	{
		// success
		$response["success"] = 1;		
		// echoing JSON response
		echo json_encode($response);
	}
	else 
	{
		// unsuccess
		$response["success"] = 0;
		
		// echoing JSON response
		echo json_encode($response);
	}

?>