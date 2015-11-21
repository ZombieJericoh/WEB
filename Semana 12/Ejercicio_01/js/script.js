$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});