(function () {
  var tags = document.getElementsByTagName("*");
      for (var i = tags.length - 1; i >= 0; i--) {
      tags[i].style.color = "red";    
      tags[i].style.textDecoration = "none";     
    }
   var p = document.getElementsByTagName("p");
        for (var i = p.length - 1; i >= 0; i--) {
          p[i].style.color = "brown";    
          p[i].style.textTransform = "uppercase";     
        };

          var div = document.querySelector(".class");
          div.style.color = 'green';
          
          var a = document.getElementsByTagName("a");
          for (var i = a.length - 1; i >= 0; i--) {
            a[i].style.fontWeight = "bold";     
            a[i].style.fontStyle = "italic";     
            a[i].style.textDecoration = "underline";  
            a[i].style.textTransform  = "uppercase";   
    };       


    }());







