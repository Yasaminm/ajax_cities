(function () {

 var selectCountry, selectProvince;

window.addEventListener('load', init);

function init(){
    selectCountry = document.querySelector('[name="country"]');
    selectCountry.addEventListener('change', getProvinces);
    selectProvince = document.querySelector('[name="province"]');
    
    
    ajax('get', 'getCountries.php', {}, fillCountries);
}

 function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
 function getProvinces(){

removeOptions(selectProvince);
ajax('get', 'getProvinces.php', {'iso3': this.value}, fillProvinces);

 }
 
 function fillProvinces(json){
//     console.log(json);
     var provinces = JSON.parse(json);
  for (var i = 0; i < provinces.length; i++) {
   var opt = document.createElement('option');
   opt.text = provinces[i].province;
   opt.value= provinces[i].province;//AF
//   console.log(provinces[i]);
   selectProvince.appendChild(opt);
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