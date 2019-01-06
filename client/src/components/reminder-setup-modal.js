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
        let postBody = {
            reminder_name: this.reminder_name,
            reminder_date: this.reminder_date,
            reminder_time: this.reminder_time
        }

        axios.post('http://localhost:8000/newReminder', postBody)
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log("Error: ", e);
            });
    }

    handleNameChange(data) {
        this.setState({
            reminder_name: data
        })
    }

    handleDateChange(data) {
        this.setState({
            reminder_date: data
        })
    }

    handleTimeChange(data) {
        this.setState({
            reminder_time: data
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
                            <input type="text" onChange={handleNameChange}/>
                        </div>
                        <div className="reminder-setup date">
                            <label for="reminder_date"><p>Date:</p></label>
                            <input type="date"  onChange={handleDateChange}/>
                        </div>
                        <div className="reminder-setup time">
                            <label for="reminder_time"><p>Time</p></label>
                            <input type="time" onChange={handleTimeChange}/>
                        </div>
                        <div className="create-reminder-button"><p>Create Reminder!</p></div>
                    </div>
                </div>
            </div>
        )
    }
}