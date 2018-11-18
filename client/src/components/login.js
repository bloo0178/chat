import React from 'react';
import '../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.getUsername(this.state.username);
        this.props.socket.emit('user joined', this.state.username);
    }

    render() {
        return (
            <div>
                <input placeholder="Enter Username" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }

}

export { Login }; 
