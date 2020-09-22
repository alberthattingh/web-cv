import React from "react";
import "./content2.css";
// import image from "./icons8-next-page-50.png";

function Content2(props) {
    const pageHandler = props.pageHandler;

    return(
        <div className="content-container">
            <section id="content2">
                <h1>Default Content Page 2</h1>
            </section>
            <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                 className="nextButton"
                 alt="Next button"
                 onClick={() => pageHandler(3)}/>
        </div>
    );
}

export default Content2;