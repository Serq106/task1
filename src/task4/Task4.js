import React from 'react';
import './Task4.css';

class Greeting extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}

export default Greeting;