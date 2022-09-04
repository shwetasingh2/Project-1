    var p =  0;

    function myFunction() {
        document.getElementById("scroll-line").style.width = p + 10+ "%"; 
        var fullname = document.getElementById("name").value;
        if(fullname != ''){
            document.getElementById("btns").disabled = false;
          }
      }

      function func1(){
        document.getElementById("scroll-line").style.width = p+30+"%";
        var option1 = document.getElementById("option-1").value;
        if(option1 != ''){
            document.getElementById("btns").disabled = false;
          }
      }

      function func2(){
        document.getElementById("scroll-line").style.width = p+30+"%";
        var option2 = document.getElementById("option-2");
        if(option2 != ''){
            document.getElementById("btns").disabled = false;
          }
      }

      function func3(){
        document.getElementById("scroll-line").style.width = p+50+"%";
        var option3 = document.getElementById("option-3");
        if(option3 != ''){
            document.getElementById("btns").disabled = false;
          }
      }

      function func4(){
        document.getElementById("scroll-line").style.width = p+50+"%";
        var option4 = document.getElementById("option-3");
        if(option4 != ''){
            document.getElementById("btns").disabled = false;
          }
      }

      function func5(){
        document.getElementById("scroll-line").style.width = p+70+"%";
      }

      function func6(){
        document.getElementById("scroll-line").style.width = p+85+"%";
      }

      function func7(){
        document.getElementById("scroll-line").style.width = p+100+"%";
      }

