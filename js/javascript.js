$( ".we-are" ).click(function() {
  	$( ".show-we-are" ).slideToggle( "slow" );
});

$( ".vision" ).click(function() {
  	$( ".show-vision" ).slideToggle( "slow" );
});

$( ".why" ).click(function() {
  	$( ".show-why" ).slideToggle( "slow" );
});

$( ".what" ).click(function() {
  	$( ".show-what" ).slideToggle( "slow" );
});

$( ".contact" ).click(function() {
  	$( ".show-contact" ).slideToggle( "slow" );
});

$("#information").click(function() {
	$(".master-column").fadeOut('slow', function() {
		$(".data").css('width','100%');
	});
})

$(".back-home").click(function () {
	$(".master-column").fadeIn('slow', function () {
		$(".data").css('width','25%');
	})
})
