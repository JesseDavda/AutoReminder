import React, { Component } from 'react';

//stylesheet import
import '../assets/stylesheets/new-reminder-modal.css';

export default class ReminderModal extends Component {
    render() {
        return(
            <div className="reminder-modal-container">
                <div className="reminder-modal-body">
                    <h2>Create a reminder.</h2>
                    <div className="inputs-container">
                        <div className="reminder-setup input">
                            <label for="reminder_name"><p>Name:</p></label>
                            <input type="text" />
                        </div>
                        <div className="reminder-setup date">
                            <label for="reminder_date"><p>Date:</p></label>
                            <input type="date" />
                        </div>
                        <div className="reminder-setup time">
                            <label for="reminder_time"><p>Time</p></label>
                            <input type="time" />
                        </div>
                        <div className="create-reminder-button"><p>Create Reminder!</p></div>
                    </div>
                </div>
            </div>
        )
    }
}