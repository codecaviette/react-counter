// List of counters - Parent component to counter.jsx (singular)

import React, { Component } from 'react';
import Counter from './counter';
import Header from './Header';

class Counters extends Component {
    state = {
        counters: [
            { item: 'shirt', id: 1, value: 4},
            { item: 'jeans', id: 2, value: 2},
            { item: 'sweater', id: 3, value: 1},
            { item: 'shoes', id: 4, value: 1},
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
                <Header />
                {/* map through counters property of Counters component's state and return each item in the Counter (singular) format */}
                { this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} item={counter.item} id={counter.id} onDelete={this.handleDelete} /> )}           {/* Pass state (value) as prop to child Counter comp */}
            
            </div>
        )
    }
}

export default Counters;




