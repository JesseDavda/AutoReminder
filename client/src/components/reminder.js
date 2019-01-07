import React, { Component } from 'react';

export default class Reminder extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
           <div className="reminder-container">
                <h1>{this.props.name}</h1>
                <h1>{this.props.date}</h1>
                <h1>{this.props.time}</h1>
           </div> 
        )
    }
}