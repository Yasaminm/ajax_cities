<?php

//sleep(10);
//echo 1;

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
            
$f = new FilterForm();
$f->setFilter('country', FILTER_SANITIZE_STRING, 'iso3');
$f->setFilter('city', FILTER_SANITIZE_STRING);
$f->setFilter('province', FILTER_SANITIZE_STRING);
$f->setFilter('lat', FILTER_VALIDATE_FLOAT);
$f->setFilter('lng', FILTER_VALIDATE_FLOAT);
$f->setFilter('pop', FILTER_VALIDATE_FLOAT);

$data = $f->filter(INPUT_POST);

$db->setTable('tb_cities');
$db->setColumns('iso2, country');
$db->setStatement('DISTINCT');
$where = sprintf("iso3='%s' AND province='%s'",$data['iso3'], $data['province']);
$db->setWhere($where);
$countryData = $db->getData();

if (count($countryData) !== 1) {
    echo -1;
    exit();
}

$data['country'] = $countryData[0]['country'];
$data['iso2'] = $countryData[0]['iso2'];

//var_dump($countryData);
//var_dump($data);

if(count($data >= 5)){
    if($db->insert($data) > 0){
        echo 1;
    }else {
      echo  -1;
    }
}else {
    echo -1;
}

