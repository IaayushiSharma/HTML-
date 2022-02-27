      
function push(num) {
    var x = document.getElementById("textvieww").innerHTML;
    if(x == 0)
    document.getElementById("textvieww").innerHTML = num;
    else
    document.getElementById("textvieww").innerHTML = x + num;
  }
        function equal()
        {
            let exp = document.getElementById("textvieww").innerHTML;
                document.getElementById("textvieww").innerHTML = eval(exp);
        }
        
        function clr()
        {
          location.reload();
        }
  