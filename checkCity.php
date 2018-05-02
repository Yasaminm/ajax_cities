<?php

$city = filter_input(INPUT_GET, 'city', FILTER_SANITIZE_STRING);
$province = filter_input(INPUT_GET, 'province', FILTER_SANITIZE_STRING);
$iso3 = filter_input(INPUT_GET, 'iso3', FILTER_SANITIZE_STRING);

//if(!is_string($id)){
//   exit();
//}

if($city === FALSE || $city === NULL || is_numeric($city)){
    exit();
}
if($province === FALSE || $province === NULL || is_numeric($province)){
    exit();
}
if($iso3 === FALSE || $iso3 === NULL || is_numeric($iso3)){
    exit();
}

require_once './config.php';
require_once './classes/DbClass.php';
require_once './classes/FilterForm.php';
require_once './classes/DbClassExt.php';
require_once './data.php';


try {   //DB connection:
            $db = new DbClassExt('mysql:host=' . HOST . ';dbname=' . DB , USER, PASSWORD);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $exc) {
                echo $exc->getCode();
            }
            
            
$db->setTable('tb_cities');

$db->setColumns('city');
// city LIKE '$city%'
$db->setWhere("city='$city' AND province='$province' AND iso3='$iso3'");
//$db->setWhere("city LIKE '$city%'");
$data = $db->getData();
//var_dump($data);
//echo json_encode($data);

echo (count($data)>0) ? 1 : -1;
