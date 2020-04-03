<?php



echo 'This is a php website with Javascript code too';
ob_get_clean();
?>
<form method="post" action="save.php">
    Username:<br>
    <input type="text" name="user"><br>
    Password:<br>
    <input type="password" name="password"><br>
</form>
