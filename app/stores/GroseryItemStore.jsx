var dispatcher	=	require('./../dispatcher.js');

function GroseryItemStore() {
	var items = [{
		name : "Ice Cream"
	}, {
		name : "Waffels"
	}, {
		name : "candy",
		purchased : true
	}, {
		name : "snacks"
	}];

	var listeners = [];

	function getItems() {
		return items;
	};

	function addGroseryItem(item) {
		items.push(item);
		triggerListener();
	};

	function onChange(listener) {
		listeners.push(listener);
	};

	function triggerListener() {
		listeners.forEach(function(listener) {
			listener(items);
		});
	};

	dispatcher.register(function(event) {
		var split = event.type.split(':');
		if(split[0] === 'grosery-item') {
			switch(split[1]) {
				case 'add':
					addGroseryItem(event.payload);
					break;
			}
		}
	});

	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new GroseryItemStore();