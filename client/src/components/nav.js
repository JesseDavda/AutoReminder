import React, {Component} from 'react';
import '../assets/stylesheets/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleNumberChange = this.handleNumberChange.bind(this);

        this.state = {
            telephoneNumber: 0
        }
    }

    handleNumberChange(event) {
        this.setState({
            telephoneNumber: event.target.value
        });


    }

    render() {
        return (
            <div className="navigation-bar-container">
                <div className="navigation-bar-title">
                    <h1>Auto Reminder</h1>
                </div>
                <div className="navigation-bar-phone-container">
                    <input type="text" value={this.state.telephoneNumber} onChange={this.handleNumberChange()}
                </div>
            </div>
        )
    }
}

export default Nav;