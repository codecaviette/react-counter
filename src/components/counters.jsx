// List of counters - Parent component to counter.jsx (singular)

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
    };
    
    // Event handler for raised/lifted event from child component
    // Will pass as prop to child component so child can use it
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);       // filter thru Counters comp's state to create a new array with only ids that do NOT match the clicked id
        this.setState( { counters: counters });         // then, create new state by settings the const counters to equal state.counters
    };

    render() {
        return (
            <div>
                {/* map through counters property of Counters component's state and return each item in the Counter (singular) format */}
                
                { this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} /> )}           {/* Pass state (value) as prop to child Counter comp */}
            
            </div>
        )
    }
}

export default Counters;




