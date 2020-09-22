// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    render() {                                 // render method has return stmt inside curly braces
        return (                               // within return stmt is jsx
            <div>                              
                <h1> Hello World! </h1>
                <button> Increment </button>
            </div>
        );
    }
}

export default Counter;