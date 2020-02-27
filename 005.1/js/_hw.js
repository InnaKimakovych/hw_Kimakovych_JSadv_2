(function () {
  var a = document.querySelectorAll('a[target]'); //передать всем
  for (var i = a.length - 1; i >= 0; i--) {
      a[i].style.backgroundColor = "yellow";
  };


  var div = document.querySelector('a[target ="_blank"]');
  div.style.backgroundColor = 'red';
  
}());




