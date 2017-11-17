 $(document).ready(function(){
    sessionStorage.myId = "test";
    sessionStorage.myPass = "password";
    sessionStorage.situ;
    $(".dropdown").hide();
    if (sessionStorage.situ !=="in" || sessionStorage.situ == null){
     $(".klik").click(function(){
        if (sessionStorage.myId == $(".idname").val() && sessionStorage.myPass == $(".passw").val()) {
        $(".inlogad").hide();
        console.log("yesss");
        $(".dropdown").show();
        sessionStorage.situ = "in"
        }     
     });
    }
    //link ke safheye my page ra baz konad
    //yek like logout
    //pak kardane in az situ
    //save kardane punkt ha va namayesh dadane anha
});




