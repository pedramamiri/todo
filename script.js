 $(document).ready(function(){
    sessionStorage.myId = "test";
    sessionStorage.myPass = "password";
    sessionStorage.situ;
    $(".dropdown").hide();
    $(".forgotPass").hide();
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
    }
    $(".lOut").click(function(){
        location.reload();  
        sessionStorage.situ = "out";
    });

    
    
    
    
    //link ke safheye my page ra baz konad
    //save kardane punkt ha va namayesh dadane anha
});




