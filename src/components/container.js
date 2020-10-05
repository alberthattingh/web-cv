import React from "react";
import './container.css';
import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: props.pageNum,
            pageHandler: props.pageHandler,
            data: null
        };
        console.log("State updated!");
    }
    getCodewarsStats() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "SXj4Pu9Xe7y6zt6R63Wp");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://alberts-backend.herokuapp.com/codewars", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));

    }
    contentSelector() {
        console.log(this.state.pageNumber + " - " + this.props.pageNum);
        if (this.props.pageNum === 1) {
            return Content1;
        }
        else if (this.props.pageNum === 2){
            return Content2;
        }
        else if (this.props.pageNum === 3){
            return Content3;
        }
        else {
            return Content1;
        }
    }
    componentDidMount() {
        this.getCodewarsStats().then(response => {
            this.setState({data: response});
        })
    }
    render() {
        const Content = this.contentSelector();

        if (this.state.data === null) {
            return(
                <div className="overlay">
                    <div className="container">
                        <div className="content">
                            <Content pageHandler={this.state.pageHandler}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="overlay">
                    <div className="container">
                        <div className="content">
                            <Content
                                pageHandler={this.state.pageHandler}
                                data={this.state.data}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
// <div className="next-button"><img src="https://img.icons8.com/ios/64/000000/circled-chevron-right.png"/></div>
export default Container;