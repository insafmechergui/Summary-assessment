$('#create').on('click', function() {

	if($("#check1").prop('checked') && $("#check2").prop('checked') && $("#check3").prop('checked')) {
		$('ul').append('<li>BLACK</li>').removeClass().addClass('black');//add li with color black
	}
	if(($("#check1").prop('checked') && $("#check2").prop('checked')) || ($("#check3").prop('checked') && $("#check2").prop('checked')) || ($("#check3").prop('checked') && $("#check1").prop('checked'))) {
		$('ul').append('<li>purple = blue + red</li>').removeClass().addClass('purple');//add li with color purple
		$('ul').append('<li>green = blue + yellow</li>').removeClass().addClass('green');//add li with color green
		$('ul').append('<li>orange = red + yellow</li>').removeClass().addClass('orange');//add li with color orange

	}
	if($("#check1").prop('checked') || $("#check2").prop('checked') || $("#check3").prop('checked')) {
		$('ul').append('<li>yellow</li>').removeClass().addClass('yellow');//add li with color yellow
		$('ul').append('<li>blue</li>').removeClass().addClass('blue');//add li with color blue
		$('ul').append('<li>red</li>').removeClass().addClass('red');//add li with color red

	}
});

$('#delete').on('click', function() {
//remove the li 
	if($("#check1").prop('checked') && $("#check2").prop('checked') && $("#check3").prop('checked')) {
		$('ul li').remove();
	}
	if(($("#check1").prop('checked') && $("#check2").prop('checked')) || ($("#check3").prop('checked') && $("#check2").prop('checked')) || ($("#check3").prop('checked') && $("#check1").prop('checked'))) {
		$('ul li').remove();

	}
	if($("#check1").prop('checked') || $("#check2").prop('checked') || $("#check3").prop('checked')) {
		$('ul li').remove();

	}
});