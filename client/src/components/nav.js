import React, {Component} from 'react';
import '../assets/stylesheets/nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="navigation-bar-container">
                <div className="navigation-bar-title">
                    <h1>Auto Reminder</h1>
                </div>
            </div>
        )
    }
}

export default Nav;