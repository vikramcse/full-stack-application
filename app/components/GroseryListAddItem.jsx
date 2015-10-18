var React	=	require('react/addons'); // here comes useful browserify
var action	=	require('./../actions/GroseryItemActionCreator.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {input: ""};
	},

	handleInputName: function(e) {
		this.setState({
			input: e.target.value
		});
	},

	addItem: function(e) {
		e.preventDefault();
		// console.log("Adding Item " + this.state.input); 
		action.add({
			name: this.state.input
		});

		this.setState({
			input: ""
		});
	},

	render: function() {
		return (
			<div className='grosery-add-item'>
				<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handleInputName}/>
					<button> Add Item </button>
				</form>
			</div>
		)
	}
});