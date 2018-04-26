<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>PHP 22 Ajax Cities</title>
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
         <label>
             <select name="country" class="form-control">
                 <option>Please select a country</option>
             </select>
         </label>
         <label>
             <select name="province" class="form-control" id="exampleFormControlSelect2">
                 <option>Please select a province</option>
             </select>
         </label>
         <label>
             <select name="city" class="form-control" id="exampleFormControlSelect2">
                 <option>Please select a city</option>
             </select>
         </label>
         <hr>
         <h2>City Info</h2>
         <hr>
         <table class="table table-primary">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
         <hr>
         <!--<button id="mapbtn" type="button">Map</button>-->
         <div id="map"></div>
     </div>
     
     <script src="assets/js/main.js" type="text/javascript"></script>
     <script>
//         var btn = document.querySelector('#mapbtn');
//         btn.addEventListener('click', function(){
//             initMap(34.5383729, 69.1840752, 15);
//         });
      var map;
      var LAT = 13.0474878;
      var LON = 80.068927;
      var ZOOM = 8;
      function initMap() {
//          console.log(arguments);

        if(arguments.length === 2){
            LAT = arguments[0];
            LON = arguments[1];
//            ZOOM = arguments[2];
            
        }
          var position = {lat: LAT, lng: LON}
        map = new google.maps.Map(document.getElementById('map'), {
          center: position,
          zoom: ZOOM
        });
        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: 'Click to zoom'
        });
        
        marker.addListener('click', function() {
          map.setZoom(ZOOM);
          map.setCenter(marker.getPosition());
        });
      }
    </script>
    
     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuP_m2YE-E2FAgwzsK_ZO3YDeqw0oRSHM&callback=initMap" async defer></script>
    
 </body>
</html>
