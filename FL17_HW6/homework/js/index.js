function visitLink(path) {
	let count = +localStorage.getItem(path);
	let one = 1;

	if (count) {
		count += one;
		localStorage.setItem(path, count);
	} else {
		localStorage.setItem(path, one)
	}
}

function viewResults() {
	const ul = document.createElement('ul');
	ul.classList.add('menu-list');
	const content = document.getElementById('content');
	content.appendChild(ul);

	const keys = Object.keys(localStorage);

	for (let key of keys) {
		const li = document.createElement('li');
		li.classList.add('menu-list__page');
		li.textContent = `You visited ${key} ${localStorage.getItem(key)} time(s) `;
		ul.appendChild(li);
	}
	localStorage.clear();
}