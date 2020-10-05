import React from 'react';
import './App.css';
import Background from './components/background'
import Container from "./components/container";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.pageHandler = this.pageHandler.bind(this);
        this.state = {pageNumber: 1};
    }

    // Handler to update page number and essentially the content shown
    pageHandler(page) {
        this.setState({pageNumber: page}, () => {
            console.log("Click: " + this.state.pageNumber);
        });
    }

    render() {
        return (
            <div>
                <Background />
                <Container pageNum={this.state.pageNumber} pageHandler={this.pageHandler}/>
            </div>
        );
    }
}

export default App;
