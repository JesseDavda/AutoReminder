import React, {Component} from 'react';
import '../assets/stylesheets/new-reminder-button.css';

class NewReminderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminders: []
        }
        this.addReminder = this.addReminder.bind(this);
    }

    addReminder() {
        this.setState(prevState => ({
            reminders: [...prevState.reminders, "new Reminder"]
        }));
    }

    render() {
        return(
            <div>
                <div className="new-reminder-button-container" onClick={this.addReminder}>
                    <h1>Add a new reminder</h1>
                </div>
                <div className="reminders">
                    {this.state.reminders.map(reminder => <h3>{reminder}</h3>)}
                </div>
            </div>
        )
    }
}

export default NewReminderButton;