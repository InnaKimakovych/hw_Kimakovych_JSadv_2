(function () {
  var div_p = document.querySelector("div + p");
  div_p.style.backgroundColor = "yellow";      
  
  var p_ul = document.querySelectorAll("p ~ ul");// не сработало на всех
  for (var i = p_ul.length - 1; i >= 0; i--) {
      p_ul[i].style.background = "#ff0000";
  };
 }());