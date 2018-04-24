<?php

$iso3 = filter_input(INPUT_GET, 'iso3', FILTER_SANITIZE_STRING);

if(strlen($iso3) !== 3){
   exit();
}

require_once './config.php';
require_once './classes/DbClass.php';
require_once './classes/FilterForm.php';
require_once './classes/DbClassExt.php';
require_once './data.php';


try {   //DB connection:
            $db = new DbClassExt('mysql:host=' . HOST . ';dbname=' . DB, USER, PASSWORD);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $exc) {
                echo $exc->getCode();
            }
            
            
$db->setTable('tb_cities');

$db->setColumns('province');
//$db->setStatement('DISTINCT');
$db->setGroupBy('province');
$db->setOrderBy('province ASC');
$db->setWhere("iso3='$iso3'");
$data = $db->getData();

echo json_encode($data);

//$countries = [];
//foreach ($data as $key => $row) {
// $countries[] = $row['iso2']. ';' . $row['country'];//AF;Afghanistan
//}
//
//echo implode(',', $countries);
