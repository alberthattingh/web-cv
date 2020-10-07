import React from "react";
import './container.css';
import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6";


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: props.pageNum,
            pageHandler: props.pageHandler,
            data: null
        };
        // console.log("State updated!");
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

    getGithubProfileData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch("https://api.github.com/users/alberthattingh", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }

    getGithubRepoData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch("https://api.github.com/users/alberthattingh/repos", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }

    contentSelector() {
        // console.log(this.state.pageNumber + " - " + this.props.pageNum);
        if (this.props.pageNum === 1) {
            return Content1;
        }
        else if (this.props.pageNum === 2){
            return Content2;
        }
        else if (this.props.pageNum === 3){
            return Content3;
        }
        else if (this.props.pageNum === 4){
            return Content4;
        }
        else if (this.props.pageNum === 5){
            return Content5;
        }
        else if (this.props.pageNum === 6){
            return Content6;
        }
        else {
            return Content1;
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.pageNum === 3 && prevProps.pageNum !== 3) {
            this.getCodewarsStats().then(response => {
                this.setState({data: response})
            });
        }
        else if (this.props.pageNum === 4 && prevProps.pageNum !== 4) {
            let data_obj = [];
            this.getGithubProfileData().then(response => {
                data_obj.push(response);
            }).then(() => {
                this.getGithubRepoData().then(response => {
                    data_obj.push(response);
                }).then(() => {
                    this.setState({data: data_obj})
                })
            });
        }
    }

    render() {
        const Content = this.contentSelector();

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
// <div className="next-button"><img src="https://img.icons8.com/ios/64/000000/circled-chevron-right.png"/></div>
export default Container;