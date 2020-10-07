import React from "react";
import './content6.css';

class Content6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSent: false,
            name: "",
            email: "",
            message: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        this.sendMessage()
        .then(response => {
            const result = JSON.parse(response.toString());
            if (result.ok) {
                alert("Your message has been sent!");
            }
            else {
                alert("The message could not be sent.");
            }
        });
        event.preventDefault();
    }

    sendMessage() {
        let name = this.state.name;
        name = name.split(" ").join("+");

        let email = this.state.email;

        let message = this.state.message;
        message += "\n\nYou can contact me at " + email;
        message = message.split(" ").join("+").split("\n").join("%0A");

        let url = `http://alberts-backend.herokuapp.com/message?name=${name}&text=${message}`;

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(url, requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }

    render() {
        const pageHandler = this.props.pageHandler;

        return(
            <div className="content-container">
                <section id="content6">
                    <h1>Contact me</h1>
                    <form id="contact-form" onSubmit={this.handleSubmit} method="GET">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                        </div>
                        <button type="submit" className="send-email">Submit</button>
                    </form>
                </section>
                <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                     className="nextButton"
                     alt="Next button"
                     onClick={() => pageHandler(7)}/>
            </div>
        );
    }
}

export default Content6;