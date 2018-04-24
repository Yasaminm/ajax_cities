<?php

$iso2 = filter_input(INPUT_GET, 'iso2', FILTER_SANITIZE_STRING);

if(strlen($iso2) !== 2){
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
$db->setWhere("iso2='$iso2'");
$data = $db->getData();

echo json_encode($data);

//$countries = [];
//foreach ($data as $key => $row) {
// $countries[] = $row['iso2']. ';' . $row['country'];//AF;Afghanistan
//}
//
//echo implode(',', $countries);
