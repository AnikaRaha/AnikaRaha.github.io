<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todolist";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//update data
$updateDate = $_POST['date'];
$getID = $_POST['id'];

$sql = "UPDATE events SET dueDate='$updateDate' WHERE id='$getID'";

if ($conn->query($sql) === TRUE) {
    echo "records updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?> 


