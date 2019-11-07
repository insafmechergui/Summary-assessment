function addList() {
	var addList = document.getElementsByTagName('ul');
	var color = document.getElementsByName('color');

	if(color.val() === "blue") {
		list.addClass('blue');
		list = addList.append('<li> </li>');

	}
	else if(color.val() === "red") {
		list.addClass('red');
		list = addList.append('<li> </li>');
	}
	else if(color.val() === "yellow") {
		list.addClass('yellow');
		list = addList.append('<li> </li>');

	}
}