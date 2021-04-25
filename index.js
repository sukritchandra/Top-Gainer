$(".submit-btn").mouseenter(function() {
  $( ".bull" ).fadeOut( 100 );
  $( ".bull" ).fadeIn( 100 );
});



$(".submit-btn").on("click", function(){

var a = $("#myInput").val();
var b = a.fontcolor("red");
var d = new Date();
var e = d.getMonth()+1;



$(".formdata").html("<span style = 'font-size: 2rem'> You have chosen </span>"
+ b +  " <span style = 'font-size: 2rem'> as Top-Gainer on </span> " + d.getDate() +"/" + e + "/" + d.getFullYear());

$(".formdata").addClass("lastMessage");

});

