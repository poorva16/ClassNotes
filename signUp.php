<?php

$data = json_decode(file_get_contents("php://input"));

$fname = mysql_real_escape_string($data->fname);
$lname = mysql_real_escape_string($data->lname);
$regno = mysql_real_escape_string($data->regno);
$pass = mysql_real_escape_string($data->pswd);

$con = mysql_connect('localhost', 'root', '');
mysql_select_db('notes', $con);
	

$qry_em = 'select count(*) as cnt from signup where regno ="' . $regno . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

if($res['cnt']==0){
$qry = 'INSERT INTO signup (firstname,lastname,regno,password) values ("' . $fname . '","' . $lname . '","' . $regno . '", "'. $pass .'")';
$qry_res = mysql_query($qry);
if ($qry_res) {
    $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
    $jsn = json_encode($arr);
    print_r($jsn);
} else {
    $arr = array('msg' => "", 'error' => 'Error In inserting record');
    $jsn = json_encode($arr);
    print_r($jsn);
}
}
else
{
     $arr = array('msg' => "", 'error' => 'User Already exists with same email');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>