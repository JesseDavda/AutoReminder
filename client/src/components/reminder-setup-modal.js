import React, { Component } from 'react';
import axios from 'axios';

//stylesheet import
import '../assets/stylesheets/new-reminder-modal.css';

export default class ReminderModal extends Component {
    constructor(props) {
        super(props);

        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);

        this.state ={
            reminder_name: "",
            reminder_date: "",
            reminder_time: "",
        }
    }

    handleCreateClick() {
        const postBody = {
            reminder_name: this.state.reminder_name,
            reminder_date: this.state.reminder_date,
            reminder_time: this.state.reminder_time
        }

        axios.post('http://localhost:8000/createReminder', postBody)
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log("Error: ", e);
            });
    }

    handleNameChange(event) {
        this.setState({
            reminder_name: event.target.value
        })
    }

    handleDateChange(event) {
        this.setState({
            reminder_date: event.target.value 
        })
    }

    handleTimeChange(event) {
        this.setState({
            reminder_time: event.target.value 
        })
    }

    render() {
        return(
            <div className="reminder-modal-container">
                <div className="reminder-modal-body">
                    <h2>Create a reminder.</h2>
                    <div className="inputs-container">
                        <div className="reminder-setup input">
                            <label for="reminder_name"><p>Name:</p></label>
                            <input type="text" value={this.state.reminder_name} onChange={this.handleNameChange.bind(this)}/>
                        </div>
                        <div className="reminder-setup date">
                            <label for="reminder_date"><p>Date:</p></label>
                            <input type="date" value={this.state.reminder_date} onChange={this.handleDateChange.bind(this)}/>
                        </div>
                        <div className="reminder-setup time">
                            <label for="reminder_time"><p>Time</p></label>
                            <input type="time" value={this.state.reminder_time} onChange={this.handleTimeChange.bind(this)}/>
                        </div>
                        <div className="create-reminder-button" onClick={this.handleCreateClick.bind(this)}><p>Create Reminder!</p></div>
                    </div>
                </div>
            </div>
        )
    }
}