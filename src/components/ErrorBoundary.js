import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	// lifecycle hook to catch error
	componentDidCatch(error,info){
		this.setState({ hasError: true })
	}

	render(){
		if (this.state.hasError){
			return <h1>Ooops. There's an error...</h1>
		}
		// renders the child component
		return this.props.children
	}
}

export default ErrorBoundary;