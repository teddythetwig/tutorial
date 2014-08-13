/** @jsx React.DOM */

var CounterComponent = React.createClass({
    getInitialState: function() {
        return {count: 0};
    },
    onClickHandler: function() {
        this.setState({count: this.state.count + 1})
    },
    render: function() {
        return (
            <p onClick={this.onClickHandler}> Hello, the count is {this.state.count}</p>
        );
    }
});

React.renderComponent(
        <CounterComponent/>,
        document.getElementById('content')
);