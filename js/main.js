Modernizr.addTest('mobiledevice', function() {
	var regex = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
  	    userAgent = navigator.userAgent,
  	    result = regex.test(userAgent);
  	    console.log("Result: ", result);

  	return result;
});


$( document ).ready(function() {
    console.log( "document loaded" );
    console.log("Test Modernizr.mobiledevice: ", Modernizr.mobiledevice);
    $('#jstest').click(function(e){
    	alert(Modernizr.mobiledevice);
    	e.preventDefault();
    });

});

$( window ).load(function() {
    console.log( "window loaded" );
    console.log("test mobiledevice: ", Modernizr.mobiledevice);
});