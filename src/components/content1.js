import React from "react";
import image from "./IMG_0001.JPG";
import "./content1.css";

function Content1() {
    return(
        <section>
            <img src={image} alt="Me"/>
            <div className="intro">
                <h1>Hello,</h1>
                <h1>I'm Albert.</h1>
            </div>
            <div className="cta">
                <button className="cta">About me</button>
            </div>
        </section>
    );
}

export default Content1;