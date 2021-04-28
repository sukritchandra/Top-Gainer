
$(".submit-btn").mouseenter(function() {
  $( ".bull" ).fadeOut( 100 );
  $( ".bull" ).fadeIn( 100 );
});


var d = new Date();
var e = d.getMonth()+1;



$(".submit-btn").on("click", function(){

var a = $("#myInput").val();
var b = a.fontcolor("red");
var c = $("#email").val();
var regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

if (a === "" || c === "" ){alert ("Enter All Inputs"); return false;
}



else if(c.match( regEx))  { $(".formdata").html("<span style = 'font-size: 2rem'> You have chosen </span>"
+ b +  " <span style = 'font-size: 2rem'> as Top-Gainer on </span> " + d.getDate() +"/" + e + "/" + d.getFullYear());
$(".formdata").addClass("lastMessage");
}

else {alert ("Enter Valid Email ID"); return false; }

});
