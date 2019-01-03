import React, { Component } from 'react';
import './assets/stylesheets/app.css';

import Nav from './components/nav.js';
import NewReminderButton from './components/new-reminder-button.js';
import NewReminderModal from './components/reminder-setup-modal.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <NewReminderModal />
        <div className="reminders-container">
          <NewReminderButton />
        </div>
      </div>
    );
  }
}

export default App;
