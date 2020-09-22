import React from "react";
import "./content3.css";
// import image from "./icons8-next-page-50.png";

function Content3(props) {
    const pageHandler = props.pageHandler;

    return(
        <div className="content-container">
            <section id="content3">
                <h1>Default Content Page 3</h1>
            </section>
            <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                 className="nextButton"
                 alt="Next button"
                 onClick={() => pageHandler(4)}/>
        </div>
    );
}

export default Content3;