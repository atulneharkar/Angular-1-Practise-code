<?php

$data = json_decode(file_get_contents("php://input"));

//fetch all the values from players info form
$name      = $data->name;
$runs      = $data->runs;
$balls     = $data->balls;
$matches   = $data->matches;
$player_id = $data->playerId;
$delete_id  = $data->delete_id;

echo $delete_id;

//connect to database
$connect = mysqli_connect("localhost", "root", "", "ipl_statistics");

//validation
//to be included here...

if($player_id) {
  
  //update data into database
  $qry = "UPDATE player_statistics 
          SET name='$name', runs='$runs', balls='$balls', matches='$matches'
          WHERE id=$player_id";
} elseif($delete_id) {
  $qry = "DELETE FROM player_statistics
         WHERE id = $delete_id";
} else {
  
  //insert data into database
  $qry = "INSERT INTO player_statistics (name, runs, balls, matches)
        VALUES ('$name', '$runs', '$balls', '$matches')"; 
}

$data = mysqli_query($connect, $qry);

//disconnect from database
$connect->close();