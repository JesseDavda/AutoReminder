import React, { Component } from 'react';
import './assets/stylesheets/app.css';

import Nav from './components/nav.js';
import NewReminderButton from './components/new-reminder-button.js';
import NewReminderModal from './components/reminder-setup-modal.js';
import Reminder from './components/reminder.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reminders: [{
        reminder_name: "Doctors",
        reminder_date: "2019-01-12",
        reminder_time: "10:30"
      }]
    }
  }

  render() {
    return (
      <div className="app-container">
        <Nav />
        <NewReminderModal />
        <div className="reminders-container">
          {this.state.reminders.map(reminder => {
            return(
              <Reminder name={reminder.reminder_name} date={reminder.reminder_date} time={reminder.reminder_time} />
            )
          })}
          <NewReminderButton />
        </div>
      </div>
    );
  }
}

export default App;
