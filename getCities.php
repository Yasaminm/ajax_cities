<?php

$province = filter_input(INPUT_GET, 'province', FILTER_SANITIZE_STRING);

if(!is_string($province)){
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

$db->setColumns('id, city');
//$db->setStatement('DISTINCT');
$db->setGroupBy('city');
$db->setOrderBy('city ASC');
$db->setWhere("province='$province'");
$data = $db->getData();

echo json_encode($data);

//$countries = [];
//foreach ($data as $key => $row) {
// $countries[] = $row['iso2']. ';' . $row['country'];//AF;Afghanistan
//}
//
//echo implode(',', $countries);
