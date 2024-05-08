<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db


$data = json_decode(file_get_contents("php://input"));

$get_email = "48";//($data->email);

$result = mysqli_query($conn,"SELECT * FROM answer where question='$get_email' ");
$get_quality_rating =0;
$get_pol_rating =0;
$get_money_rating =0;
$get_dis_rating =0;
$count =0;

if(mysqli_num_rows($result))
{
	$response["details"] = array();	

	while($Alldetails = mysqli_fetch_array($result))
	{
		// temp user array
		$details = array();
		$details = $Alldetails;
		$question = $Alldetails["field_3"];
		$get_rating = $Alldetails["field_9"];
					// Find the age metrics
		
			if (strcmp($question,'Quality of Service' )==0)
			{
				$get_quality_rating = $get_quality_rating + $get_rating;
				$count++;
			}
		
		if (strcmp($question,'Politeness' )==0)
			{
				$get_pol_rating = $get_pol_rating + $get_rating;
			}
		if (strcmp($question,'Value for Money' )==0)
			{
				$get_money_rating = $get_money_rating + $get_rating;
			}
		if (strcmp($question,'Discount Policy' )==0)
			{
				$get_dis_rating = $get_dis_rating + $get_rating;
			}
		
	}	
	

		//echo $count;
		$details["get_dis_rating"] = $get_dis_rating/$count;
		$details["get_money_rating"] = $get_money_rating/$count;
		$details["get_pol_rating"] = $get_pol_rating/$count;
		$details["get_quality_rating"] = $get_quality_rating/$count;
		
			
		array_push($response["details"],$details);
	$response["success"] = 1;
	echo json_encode($response);

}
else
{
	$response["success"] = 0;	
	echo json_encode($response);
}
	

?>