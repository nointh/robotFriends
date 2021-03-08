import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){
        if (this.state.hasError)
        {
            return <h1>We have some issues. We appologise for this inconvence</h1>
        }
        else
        return this.props.children
    }
}
export default ErrorBoundary;