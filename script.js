// main loop
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
        myFunction();
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

    // logga ut och my list function
    $(".lOut").click(function(){
        location.reload();  
        sessionStorage.situ = "out";
    });
    $(".myList").click(function(){
        $(".list").show();
        $(".already").hide();
        myFunction()
    
    });
   // first todo list 
   var stuffToDo = [
   "Klipp gräset", 
   "Betala räkningar",
   "Köp mjölk", 
   "Spika upp tavlor",
   "helsa hem till mamma",
   "ladda busskort",
   "tvätta kläder"
   ];

   //loop för att fixa myToDoList
   if ( localStorage.changeList == "steg1"){
   var json_str = JSON.stringify(stuffToDo);
   localStorage.dolist = json_str;   
   myToDoList = JSON.parse(localStorage.dolist);
   }
   else{
    myToDoList = JSON.parse(localStorage.changeList);
   }

   // funktion för visa eller ta bort verje variabel i array
   function myFunction() {       
   var output ="";
   for (var i in myToDoList ){ 
       output += "<li>" + myToDoList[i] + "</li>" ;
   }
   $(".showYourList").html(output);  
   $( "li" ).click(function(){
    $( this ).hide( 2000) 
    var  removeitem = $(this).text();    
    myToDoList.splice($.inArray(removeitem,myToDoList),1);
    localStorage.changeList = JSON.stringify(myToDoList);
    console.log(myToDoList);
   });
}

   // pusha en ny variabel
   $( ".Add" ).click(function(){
    myToDoList.push($(".newItem").val())
    myFunction()
    localStorage.changeList = JSON.stringify(myToDoList);
    console.log(myToDoList);
   });
   
   // återställa hela array till första situation
   $( ".resetAllt" ).click(function(){
    location.reload();
    localStorage.changeList = "steg1";
   });




    // tid och datum
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






