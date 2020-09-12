import React from "react";
import './container.css';

class Container extends React.Component {
    render() {
        return(
            <div className="overlay">
                <div className="container">
                    <div className="content"></div>
                    <div className="next-button"><img src="https://img.icons8.com/ios/64/000000/circled-chevron-right.png"/></div>
                </div>
            </div>
        );
    }
}

export default Container;