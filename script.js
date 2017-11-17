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
        //sessionStorage.situ = "in"


        

        }
    
      
     });
    }
});




