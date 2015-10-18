var dispatcher	=	require('./../dispatcher.js');

module.exports = {
	add: function(item) {
		dispatcher.dispatch({
			payload: item,
			type: "grosery-item:add"
		});
	}
};