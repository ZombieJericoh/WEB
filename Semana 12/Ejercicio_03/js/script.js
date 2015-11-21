$( "a" ).click(function() {
  $( "div" ).fadeIn( 1000, function() {
    $( "span" ).fadeIn( 100 );
  });
  return false;
});