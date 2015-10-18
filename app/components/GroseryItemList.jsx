var React				=	require('react/addons'); // here comes useful browserify
var GroseryItem 		=	require('./GroseryItem.jsx');
var GroseryListAddItem	=	require('./GroseryListAddItem.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Grosery Listify</h1>
				<div>
					{
						this.props.items.map(function(item, index) {
							return (
								<GroseryItem item={item} key={"item" + index}/>
							)
						})
					}
				</div>

				<GroseryListAddItem />
			</div>
		)
	}
});