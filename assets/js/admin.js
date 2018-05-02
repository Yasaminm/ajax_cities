(function () {

 var selectCountry, selectProvinces, formAdmin, ajaxLoader, btn, fieldCity;

 window.addEventListener('load', init);

 function init() {
     ajaxLoader = document.querySelector('#ajaxLoader');
     
  selectCountry = document.querySelector('[name="country"]');
  selectCountry.addEventListener('change', getProvinces);

  selectProvinces = document.querySelector('[name="province"]');
  
  formAdmin = document.querySelector('#formAdmin');
  formAdmin.addEventListener('submit', sendForm);
  
  btn = document.querySelector('button');
  fieldCity = document.querySelector('[name="city"]');
  fieldCity.addEventListener('input', checkCity);

  ajax('get', 'getCountries.php', {}, fillCountries);
  
 }
 
 function checkCity(e){
//     console.log(this.value);
    var params = {
        'city': this.value,
        'province': selectProvinces.value,
        'iso3': selectCountry.value
        
    }
     ajax('get', 'checkCity.php',params,evaluationCity);
 }
 
 
 function evaluationCity(res){
//     console.log(res);
fieldCity.classList.remove('is-invalid');
     if(res === '1'){
         fieldCity.classList.add('is-invalid');
//         btn.classList.add('disabled');
//         btn.disabled;
     }
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
if(fieldCity.classList.contains('is-invalid')){
    return false;
}
var params = serializeObject(this);
//console.log(params);
ajax('post', 'insertCity.php',params,sentForm);
ajaxLoader.style.display = 'inline';
}

function sentForm(r, status){
    ajaxLoader.style.display = 'none';
  if (r === '1' && status === 200) {
      console.log('green');
   //loader ausblenden
   btn.classList.remove("btn-outline-primary");
   btn.classList.add("btn-success");
   window.setTimeout(function () {
    btn.classList.remove("btn-success");
    btn.classList.add("btn-outline-primary");
   }, 2000);
   formAdmin.reset();
  } else {
   btn.classList.add("btn-danger");
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