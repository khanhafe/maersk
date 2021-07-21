const shuffle = (items) => {
	let cached = items.slice(0),
		temp, i = cached.length,
		rand;
	while (--i) {
		rand = Math.floor(i * Math.random());
		temp = cached[rand];
		cached[rand] = cached[i];
		cached[i] = temp;
	}
	return cached;
}

const shuffleNodes = () => {
	const list = document.getElementById("shuffleAndSort");
	let nodes = list.children,
		i = 0;
	nodes = Array.prototype.slice.call(nodes);
	nodes = shuffle(nodes);
	while (i < nodes.length) {
		list.appendChild(nodes[i]);
		++i;
	}
}


const sortList = () => {
	const main = document.getElementById("shuffleAndSort");
	[].map.call(main.children, Object).sort(function (a, b) {
		return +a.id.match(/\d+/) - +b.id.match(/\d+/);
	}).forEach(function (elem) {
		main.appendChild(elem);
	});


}