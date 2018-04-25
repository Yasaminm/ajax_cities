(function () {

 var selectCountry, selectProvince, selectCities, tableBody;
 var infoKeys = ['iso3', 'city', 'province', 'country', 'pop'];

window.addEventListener('load', init);

function init(){
    selectCountry = document.querySelector('[name="country"]');
    selectCountry.addEventListener('change', getProvinces);
    selectCountry.addEventListener('change', function(){
    removeOptions(selectCities);
    });
    selectProvince = document.querySelector('[name="province"]');
    selectProvince.addEventListener('change', getCities);
    selectCities = document.querySelector('[name="city"]');
    
    
    selectCities.addEventListener('change', getCityTable);
   tableBody = document.querySelector('#tableBody');
    
    
    ajax('get', 'getCountries.php', {}, fillCountries);
}
///////////////////////////////////////
 function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
//////////////////////////////////////
//function removeOptions(selectBox){
//    
//    var max = selectBox.options.length;
//    
//    for (var i = 1; i < max; i++){
//        selectBox.removeChild(selectBox.options[1]);
//    }
//}
////////////////////////////////////////
 function getProvinces(){

ajax('get', 'getProvinces.php', {'iso3': this.value}, fillProvinces);

 }
 function getCities(){

ajax('get', 'getCities.php', {'province': this.value}, fillCities);

 }
 
 function getCityTable(){

ajax('get', 'getCityTable.php', {'id': this.value}, fillCityTable);

 }
 
 function fillProvinces(json){
//     console.log(json);
//selectProvince.options.length = 0;
    removeOptions(selectProvince);
     var provinces = JSON.parse(json);
  for (var i = 0; i < provinces.length; i++) {
   var opt = document.createElement('option');
   opt.text = provinces[i].province;
   opt.value= provinces[i].province;//AF
//   console.log(provinces[i]);
   selectProvince.appendChild(opt);
  }
 }
 
 function fillCities(json){
//     console.log(json);
    removeOptions(selectCities);
     var cities = JSON.parse(json);
  for (var i = 0; i < cities.length; i++) {
   var opt = document.createElement('option');
   opt.text = cities[i].city;
   opt.value= cities[i].id;
//   console.log(cities[i]);
   selectCities.appendChild(opt);
  }
 }
 
 function fillCityTable(json){
     var info = JSON.parse(json);
     tableBody.innerHTML = '';
     console.log(info);
//     console.log(info["0"].country);
var tr = document.createElement('tr');
tableBody.appendChild(tr);
        for (var i = 0; i < infoKeys.length ; i++) {
            var td = document.createElement('td');
            td.innerHTML = info[infoKeys[i]];
            tr.appendChild(td);
        }

 }
 
 function fillCountries(json) {
  var countries = JSON.parse(json);
//  console.log(json);
  for (var i = 0; i < countries.length; i++) {
   var opt = document.createElement('option');
   opt.text = countries[i].country;//Afghanistan
   opt.value= countries[i].iso3;//AF
//   console.log(opt.value);
   selectCountry.appendChild(opt);
  }
 }
 
//  function fillCountries(r) {
//  var countries = r.split(','); //AF;Afghanistan,AX;Aland...
//  console.log(countries);
//  for (var i = 0; i < countries.length; i++) {
//      var country = countries[i].split(';');//AF;Afghanistan
//   var opt = document.createElement('option');
//   opt.text = country[1];//Afghanistan
//   opt.value= country[0];//AF
//   console.log(opt.value);
//   selectCountry.appendChild(opt);
//  }
// }

 


})();