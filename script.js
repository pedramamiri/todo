 $(document).ready(function(){
    sessionStorage.myId = "test";
    sessionStorage.myPass = "password";
    sessionStorage.situ;
    if (sessionStorage.situ !=="in" || sessionStorage.situ == null){
     $(".gheyb").click(function(){
        if (sessionStorage.myId == $(".idname").val() && sessionStorage.myPass == $(".passw").val()) {
        $(".inlogad").hide();
        console.log("yesss");
        //sessionStorage.situ = "in"


        

        }
    
      
     });
    }
});




