import React from "react";
import './container.css';
import Content1 from './content1';
import Content2 from './content2';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1
        }
    }
    contentSelector() {
        if (this.state.pageNumber === 1) {
            return Content1;
        }
        else {
            return Content2;
        }
    }
    render() {
        const Content = this.contentSelector();
        return(
            <div className="overlay">
                <div className="container">
                    <div className="content">
                        <Content />
                    </div>
                </div>
            </div>
        );
    }
}
// <div className="next-button"><img src="https://img.icons8.com/ios/64/000000/circled-chevron-right.png"/></div>
export default Container;