import React from "react";
import image from "./IMG_0001.JPG";
import "./content1.css";

function Content1(props) {
    const pageHandler = props.pageHandler;

    return(
        <section id="content1">
            <img src={image} alt="Me"/>
            <div className="intro">
                <h1>Hello,</h1>
                <h1>I'm Albert.</h1>
            </div>
            <div className="cta">
                <button className="cta" onClick={() => pageHandler(2)}>About me</button>
            </div>
        </section>
    );
}

export default Content1;