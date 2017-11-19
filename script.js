
$(document).ready(function(){
    sessionStorage.myId = "test";
    sessionStorage.myPass = "password";
    sessionStorage.situ;
    $(".dropdown").hide();
    $(".forgotPass").css("display", "none");
    $(".already").css("display", "none");
    $(".list").css("display", "none");
    if (sessionStorage.situ !=="in"){
     $(".klik").click(function(){
        if (sessionStorage.myId == $(".idname").val() && sessionStorage.myPass == $(".passw").val()) {
        $(".inlogad").css("display", "none");
        $(".forgotPass").css("display", "none");
        $(".dropdown").show();
        $(".list").show();
        sessionStorage.situ = "in"
        }
        else{
        $(".inlogad").css("display", "none");
        $(".forgotPass").show();
        }     
     });
    }
    else{
        $(".dropdown").show();
        $(".already").show();
        $(".inlogad").css("display", "none");

    }
    $(".lOut").click(function(){
        location.reload();  
        sessionStorage.situ = "out";
    });
    $(".myList").click(function(){
        $(".list").show();
        $(".already").hide();
    
    });
   
   var stuffToDo = [
   "Klipp gräset", 
   "Betala räkningar",
   "Köp mjölk", 
   "Spika upp tavlor",
   "helsa hem till mamma",
   "ladda busskort",
   "tvätta kläder"
   ];
   var json_str = JSON.stringify(stuffToDo);
   localStorage.dolist = json_str; 
   myToDoList = JSON.parse(localStorage.dolist);
   var output ="";
   for (var i in myToDoList){ 
       output += "<li>" + myToDoList[i] + "</li>" ;
   }
   $(".showYourList").html(output);

    
    

    






    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var t = new Date(); 
    var datetime = "Date: " + days[t.getDay()] + " - " 
                    + t.getDate() + "/"
                    + (t.getMonth()+1)  + "/" 
                    + t.getFullYear() + " Last update: "  
                    + t.getHours() + ":"  
                    + t.getMinutes() + ":" 
                    + t.getSeconds();
    $(".time").append(datetime);

});






