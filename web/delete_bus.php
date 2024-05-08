<?php
/*********************
**** Arudhra Innovations *****
**** Sep 22, 2015 ****
**********************/

/* Following code will delete a row in table by referring id */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db


// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_id = ($data->id);
		
// get all news
$result = mysqli_query($conn,"DELETE FROM business WHERE cus_id = '$get_id'");
	
// check for empty result
if ($result)
{
	// success	
	$response["success"] = 1;
	// echoing JSON response
	echo json_encode($response);
} 
else
{
	$response["success"] = 0;
	// echoing JSON response
	echo json_encode($response);
	
}

	
?>