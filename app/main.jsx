// where all the rendering takes place
var React				=	require('react/addons'); // here comes useful browserify
var GroseryItemList 	= 	require('./components/GroseryItemList.jsx');
var groseryItemStore  	= 	require('./stores/GroseryItemStore.jsx');

var initial				= 	groseryItemStore.getItems();
// because id is taken upto the global scope so no need for getElementByID
// we have passed the object as a property to component
function render() {
	React.render(<GroseryItemList items={initial}/>, app); 
}
// when on change called then again render
groseryItemStore.onChange(function(items) {
	initial = items;
	render();
});

render();
