<?php
/*********************
**********************/

require_once __DIR__ . '/db_config.php';


// Create connection
$conn = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

return $conn;

?>