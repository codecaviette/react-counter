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
    
    render() {
        return (
            <div>
                { this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} /> )}           {/* map through counters property of Counters component's state and return each item in the Counter (singular) format */}
            </div>
        )
    }
}

export default Counters;




