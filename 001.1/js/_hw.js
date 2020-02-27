(function () {
  var div = document.querySelector("#id1");
  div.style.color = 'red';
  div.style.marginTop = '10px';
  div.style.background = 'red';


  var div1 = document.querySelector(".class1");
  div1.style.color = 'blue';
	div1.style.fontSize = '14px';
	div1.style.textDecoration ='underline';
  
  div1.classList.add('newclass');
  var newclass = window.getComputedStyle(div1);
  console.log(newclass);
  
}());