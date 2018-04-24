<?php

class DbClassExt extends DbClass {

   private $columns = '*';
 private $statement = '';
 private $orderby = '';

 /**
  * Sort by columns
  * examples
  * 
  * 
  * 
  * @param string $o examples id ASC,name DESC
  */
 public function setOrderBy(string $o) {
  $this->orderby = $o;
 }

 public function setStatement(string $st) {
  $this->statement = $st;
 }

 public function setColumns(string $cols) {
  $this->columns = $cols;
 }

 public function getColumns() {
  return $this->columns;
 }

 public function getData() {

  $o = '';
  if ($this->orderby !== '') {
   $o = ' ORDER BY ' . $this->orderby;
  }
  $query = sprintf("SELECT %s %s FROM %s %s", $this->statement, $this->columns, $this->tableName, $o);
  $stmt = $this->query($query);
  return $stmt->fetchAll(PDO::FETCH_ASSOC);
 }
    
    /////////////////////////////tb_hotel_service (insert into join Table).////////////////////////
 public function insertArray(array $data = []) {
  //$data["service_id"] = [1,2,4]
  //$data["hotel_id"] = [1,1,1]
  $keys = array_keys($data);

  $amountValues = count($data[$keys[0]]);

  for ($i = 0; $i < $amountValues; $i++) {
   $tmp = [];
   for ($j = 0; $j < count($keys); $j++) {
    //$tmp['hotel_id'] = $data['hotel_id'][0]
    //$tmp['service_id'] = $data['service_id'][0]
    $tmp[$keys[$j]] = $data[$keys[$j]][$i];
   }
   $this->insert($tmp);
  }
 

        //Schleife
        //$row['hotel_id'] = 1
        //$row['service_id'] = 2
        //$this->insert($row);
        //Schleife Ende
    }
}
