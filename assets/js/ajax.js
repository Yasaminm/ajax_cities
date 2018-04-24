

function ajax(method, url, params, callback) {
// {city: 'Berlin'}
// 'city=Berlin'
var xhr, propName, paramString = ' ';

    for (propName in params) {
       paramString += propName + '=' +params[propName] + '&'; //params['city']
    }
     xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
       callback(xhr.responseText);
      }
     };
     if (method === 'get') {
  xhr.open(method, url + '?' + paramString, true);
  xhr.send(null);
 } else if (method === 'post') {
  xhr.open(method, url, true);
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  xhr.send(paramString);
 } else {
  return false;
 }
}

//
//ajax('post', 'data.php', {city: 'Berlin'}, fx);
//
//function fx(res){
//    console.log(res);
//}
//
/////////////////////////////////////////////////
