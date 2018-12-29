import React, { Component } from 'react';
import './assets/stylesheets/app.css';

import Nav from './components/nav.js';
import NewReminderButton from './components/new-reminder-button.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <div className="reminders-container">
          <NewReminderButton />
        </div>
      </div>
    );
  }
}

export default App;
