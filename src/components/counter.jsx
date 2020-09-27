// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    state = {                        // class comp Counter holds state 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };
    
    render() {                                 // render method has return stmt inside curly braces
             
        return (                               // within return stmt is jsx
            <div>    
                <span className={this.getBadgeClasses()} > {this.formatCount()}</span>    
                <button className="btn btn-secondary btn-sm"> Increment </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}        {/* Dynamically build list in React by mapping thru tags array and assigning each item to be a list item */}
                </ul>
            </div>
        );
    }

    // Change color of badge depending on this.state.count value
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";     //if count equals 0, then append "warning" to what classes equals and set that as new value for classes var; otherwise, append "primary"
        return classes;
    }

    formatCount() {
        const { count } = this.state;           // Destructured this.state.count object so can use shortened "count" in next line rather than "this.state.count"
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;