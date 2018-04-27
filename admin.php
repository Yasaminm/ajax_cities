<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>PHP 22 AJA CITIES ADMIN</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link rel="stylesheet" href="assets/css/styles.css">    
  <script src="assets/js/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="assets/js/ajax.js" type="text/javascript"></script>
 </head>
 <body>
  <div class="container">
   <h1>City Data</h1>
   <hr>
   <form id="formAdmin" autocomplete="off">
    <label>
        <select required name="country" class="form-control">
         <option value="">Please select a country</option>
     </select>
    </label>
    <label>
        <select required name="province" class="form-control">
         <option value="">Please select a province</option>
     </select>
    </label>
    <hr>
    <label>City
        <input required class="form-control" type="text" name="city" >
    </label>
    <label>Latitude
     <input class="form-control"  type="text" name="lat" >
    </label>
    <label>Longitude
     <input class="form-control"  type="text" name="lng" >
    </label>
    <label>Population
     <input class="form-control"  type="text" name="pop" >
    </label>
    <hr>
    <button class="btn btn-outline-primary">insert<i><img id="ajaxLoader" src="assets/images/btnloader.gif" alt=""/></i></button>
    
   </form>

  </div>
  <script src="assets/js/admin.js" type="text/javascript"></script>
 </body>
</html>
