// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    state = {                        // class comp Counter holds state 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    //Helper method: Determines what to display depending on whether or not there are tags in the state
    renderTags() {                                                                       // Class components do not use "function" keyword to define function
        if (this.state.tags.length === 0) return <p>There are no tags</p>;               // This defines conditional rendering
        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>       // Dynamically build list in React by mapping thru tags array and assigning each item to be a list item
    }

    //Helper method: Defines event handler for button's onClick 
    handleIncrement = () => {                       // Bind event handler using arrow functions which inherit the "this" keyword
        console.log('Increment Clicked', this);
    }

    render() {                                 // render method has return stmt inside curly braces         
        return (                               // within return stmt is jsx
            <div>   
                <span className={this.getBadgeClasses()} > {this.formatCount()}</span>              {/* Be sure to use () after method in order to call it */}    
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>        {/* In this case, we are NOT using () after method bc we only want it to be called when button is clicked, not when page loads */}
                
                { this.state.tags.length === 0 && "Please create a new tag!" }          {/* another conditional where && looks at first operand and if it's truthy then returns second operand */}
                { this.renderTags() }          {/* call this hoisted method for conditional rendering */}
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