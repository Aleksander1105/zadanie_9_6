var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var next = list.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + next;
	list.appendChild(element);
});
