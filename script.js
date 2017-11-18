
$(document).ready(function(){
    sessionStorage.myId = "test";
    sessionStorage.myPass = "password";
    sessionStorage.situ;
    
    $(".dropdown").hide();
    $(".forgotPass").hide();
    $(".already").hide();
    if (sessionStorage.situ !=="in"){
     $(".klik").click(function(){
        if (sessionStorage.myId == $(".idname").val() && sessionStorage.myPass == $(".passw").val()) {
        $(".inlogad").hide();
        $(".forgotPass").hide();
        $(".dropdown").show();
        sessionStorage.situ = "in"
        }
        else{
        $(".inlogad").hide();
        $(".forgotPass").show();
        }     
     });
    }
    else{
        $(".dropdown").show();
        $(".already").show();
        $(".inlogad").hide();

    }
    $(".lOut").click(function(){
        location.reload();  
        sessionStorage.situ = "out";
    });

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




