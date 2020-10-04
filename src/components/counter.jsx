// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    state = {                        // class comp Counter holds state 
        value: this.props.value
    };

    //Helper method: Defines event handler for button's onClick 
    handleIncrement = () => {                       // Bind event handler using arrow functions which inherit the "this" keyword
        this.setState( { value: this.state.value + 1 } );        // setState updates the state so that the new count is current count plus 1
    }

    render() {                                 // render method has return stmt inside curly braces         
        return (                               // within return stmt is jsx
            <div>   
                <span style={{ fontWeight:"bold" }}>{this.props.item}</span>
                <span className={this.getBadgeClasses()} > {this.formatCount()}</span>              {/* Be sure to use () after method in order to call it */}    
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> + </button>        {/* In this case, we are NOT using () after method bc we only want it to be called when button is clicked, not when page loads */}
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2"> Remove </button>
            </div>
        );
    }

    // Change color of badge depending on this.state.count value
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";     //if count equals 0, then append "warning" to what classes equals and set that as new value for classes var; otherwise, append "primary"
        return classes;
    }
    formatCount() {
        const { value: count } = this.state;           // Destructured this.state.count object so can use shortened "count" in next line rather than "this.state.count"
        return count === 0 ? "Zero" : count;
}}

export default Counter;