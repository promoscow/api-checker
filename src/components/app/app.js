import React, {Component} from 'react';
import Request from '../../service/request';

import './app.css';

const request = new Request();

export default class App extends Component {

    state = {
        label: ''
    };

    onLabelChange = (element) => {
        this.setState({
            label: element.target.value
        });
    };

    onSubmit = async (element) => {
        element.preventDefault();
        console.log('request: ' + this.state.label);
        if (this.state.label !== '') {
            await request.getResource(this.state.label);
        }
    };

    render() {
        return (
            <div className="main">
                <form onSubmit={this.onSubmit}>
                    <input
                        className="form"
                        type="text"
                        placeholder="request"
                        onChange={this.onLabelChange}
                        value={this.state.label}
                    />
                    <button
                        className="btn-secondary button-custom"
                        onClick={this.onSubmit}>
                        Send request
                    </button>
                </form>
            </div>
        )
    }
}