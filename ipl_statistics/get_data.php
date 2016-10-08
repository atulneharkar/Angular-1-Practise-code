<?php

//connect to database
$connect = mysqli_connect("localhost", "root", "", "ipl_statistics");

//validation
//to be included here...

//fetch data from database
$qry = "SELECT * from player_statistics";
$data = mysqli_query($connect, $qry);
$arr = array();
$i = 0;
while($row = mysqli_fetch_array($data, MYSQL_NUM))
{
  $arr[$i] = array(
    'id'      => $row[0],
    'name'    => $row[1],
    'runs'    => $row[2],
    'balls'   => $row[3],
    'matches' => $row[4]
  ); 
  $i++;
}
echo json_encode($arr);

//disconnect from database
$connect->close();