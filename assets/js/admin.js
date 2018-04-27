(function () {

 var selectCountry, selectProvinces, formAdmin, ajaxLoader;

 window.addEventListener('load', init);

 function init() {
     ajaxLoader = document.querySelector('#ajaxLoader');
     
  selectCountry = document.querySelector('[name="country"]');
  selectCountry.addEventListener('change', getProvinces);

  selectProvinces = document.querySelector('[name="province"]');
  
  formAdmin = document.querySelector('#formAdmin');
  formAdmin.addEventListener('submit', sendForm);

  ajax('get', 'getCountries.php', {}, fillCountries);
  
 }

/////////////////////////////////////////
//function serialize(form){
////     console.log(e.type);
////    console.log('check', this);
//var elements = form.querySelectorAll('[name]');
//for(var i = 0; i < elements.length; i++){
////    console.log(elements[i].name, elements[i].value);
//    var params = []; //x=1&y=2&z=3
//    params.push(elements[i].name +'='+ elements[i].value);
//}
//return params.join('&');
//}
////////////////////////////////////
function serializeObject(form){
    
    var elements = form.querySelectorAll('[name]');
    var params = {};
for(var i = 0; i < elements.length; i++){
//    console.log(elements[i].name, elements[i].value);
    params[elements[i].name] = elements[i].value;
}
return params;
}

function sendForm(e){
    e.preventDefault();
var params = serializeObject(this);
console.log(params);
ajax('post', 'insertCity.php',params,sentForm);
ajaxLoader.style.display = 'inline';
}

function sentForm(r){
    ajaxLoader.style.display = 'none';
    if (r === '1' && status === 200){
        //loader ausblenden
        formAdmin.reset();
    }
}

 function deleteOptions(selectBox) {
  var max = selectBox.options.length;
  for (var i = 1; i < max; i++) {
   selectBox.removeChild(selectBox.options[1]);
  }
 }

 function fillProvinces(json) {
  var provinces = JSON.parse(json);
  deleteOptions(selectProvinces);
  for (var i = 0; i < provinces.length; i++) {
   var opt = document.createElement('option');
   opt.text = provinces[i].province;
   opt.value = provinces[i].province;
   selectProvinces.appendChild(opt);
  }
 }

 function getProvinces() {
  ajax('get', 'getProvinces.php', {'iso3': this.value}, fillProvinces);
 }

 function fillCountries(json) {
  var countries = JSON.parse(json);

  for (var i = 0; i < countries.length; i++) {
   var opt = document.createElement('option');
   opt.text = countries[i].country;//Afghanistan
   opt.value = countries[i].iso3;//AF
   selectCountry.appendChild(opt);
  }
 }

})();