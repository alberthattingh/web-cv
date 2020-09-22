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
            pageHandler: props.pageHandler
        };
        console.log("State updated!");
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
    render() {
        const Content = this.contentSelector();
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
}
// <div className="next-button"><img src="https://img.icons8.com/ios/64/000000/circled-chevron-right.png"/></div>
export default Container;