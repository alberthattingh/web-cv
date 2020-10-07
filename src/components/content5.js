import React from "react";
import './content5.css';

class Content5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pageHandler = this.props.pageHandler;

        return(
            <div className="content-container">
                <section id="content5">
                    <h1>Other Content</h1>
                </section>
                <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                     className="nextButton"
                     alt="Next button"
                     onClick={() => pageHandler(6)}/>
            </div>
        );
    }
}

export default Content5;