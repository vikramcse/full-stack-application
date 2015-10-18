var React	=	require('react/addons'); // here comes useful browserify
console.log('jsx is running');
// where all the rendering takes place

var GroseryItemList = require('./components/GroseryItemList.jsx');
// because id is taken upto the global scope so no need for getElementByID
React.render(<GroseryItemList />, app); 
