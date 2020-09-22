// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    state = {                        // class comp Counter holds state 
        count: 0,
        //imageUrl: 'https://picsum.photos/200',      // this will pick a random 200x200 image
    };
    
    // Hoisted styling to use in render method
    styles = {
        fontSize: 10, 
        fontWeight: "bold",
    };

    render() {                                 // render method has return stmt inside curly braces
        return (                               // within return stmt is jsx
            <div>    
                <span style={this.styles} className="badge badge-primary m-2" > {this.formatCount()}</span>    
                <button className="btn btn-secondary btn-sm"> Increment </button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;           // Destructured this.state.count object so can use shortened "count" in next line rather than "this.state.count"
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;