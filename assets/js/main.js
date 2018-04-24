(function () {

 var selectCountry = document.querySelector('[name="country"]');


 ajax('get', 'getCountries.php', {}, fillCountries);
 
 function fillCountries(r) {
  var countries = r.split(','); //AF;Afghanistan,AX;Aland...
  console.log(countries);
  for (var i = 0; i < countries.length; i++) {
      var country = countries[i].split(';');//AF;Afghanistan
   var opt = document.createElement('option');
   opt.text = country[1];//Afghanistan
   opt.value= country[0];//AF
   console.log(opt.value);
   selectCountry.appendChild(opt);
  }
 }

 


})();