import React from "react";
import "./content2.css";
import pdf from "./ResumeAlbertHattingh.pdf";
// import image from "./icons8-next-page-50.png";

function Content2(props) {
    const pageHandler = props.pageHandler;

    return(
        <div className="content-container">
            <section id="content2">
                <h1>About me</h1>
                <p>
                    My name is Albert Hattingh. I am a full-stack software engineer based in Johannesburg, and I
                    am passionate about building complex software solutions from scratch and learning new technologies.
                    <span className="optional">&nbsp;I am 21 years old and graduated from the North West University
                        Potchefstroom Campus in 2020.</span>
                    &nbsp;Although I am young, what I lack in experience I make up for in tenacity, ambition and drive to be
                    one of the best in my field. <em>“Work until you no longer have to introduce yourself,”</em> is a quote
                    that best describes my mission and proves my dedication to every project I take on.
                </p>
                <p className="optional">
                    Click the button below to download a PDF version of my resume and learn more about me.
                </p>
                <div className="cta">
                    <a href={pdf} target="_blank"><button className="cta" onClick={() => {}}>Download My Resume</button></a>
                </div>
            </section>
            <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                 className="nextButton"
                 alt="Next button"
                 onClick={() => pageHandler(3)}/>
        </div>
    );
}

export default Content2;