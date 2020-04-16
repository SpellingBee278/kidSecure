<?php

$connection = mysqli_connect('localhost', 'root', 'root', 'scotchbox');

$sql = "Select *  from users";
$query = mysqli_query($connection,$sql);

while ($row = mysqli_fetch_assoc($query)) {
    printf("ID: %s  Name: %s", $row['id'], $row['s']);
    echo "<br>";
}
