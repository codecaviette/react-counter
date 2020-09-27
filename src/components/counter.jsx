// Use .jsx extension over .js for better code completion

import React, { Component } from 'react';

class Counter extends Component {
    state = {                        // class comp Counter holds state 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };
    
    //Helper method: Determines what to display depending on whether or not there are tags in the state
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>       // Dynamically build list in React by mapping thru tags array and assigning each item to be a list item
    }

    render() {                                 // render method has return stmt inside curly braces         
        return (                               // within return stmt is jsx
            <div>    
                { this.renderTags() }
            </div>
        );
    }
}

export default Counter;