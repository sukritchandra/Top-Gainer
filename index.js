$(".submit-btn").mouseenter(function() {
  $( ".bull" ).fadeOut( 100 );
  $( ".bull" ).fadeIn( 100 );
});



$(".submit-btn").on("click", function(){

var a = $("#myInput").val();
var d = new Date();
var e = d.getMonth()+1;



$(".formdata").html("You have chosen "   + a +  " as Top-Gainer on " + d.getDate() +"/" + e + "/" + d.getFullYear());

$(".formdata").addClass("lastMessage");

});
