import React from "react";
import './content5.css';
import image1 from "./BigBirdTweets.png";
import image2 from "./chryso.png";
import image3 from "./synthesis.png";
import image4 from "./entelect.png";


class Content5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pageHandler = this.props.pageHandler;

        return(
            <div className="content-container">
                <section id="content5">
                    <h1>Companies I've worked with</h1>
                    <div className="companies">
                        <h3>Freelance development:</h3>
                        <div className="freelance">
                            <img src={image1} alt="Big Bird Tweets" onClick={() => window.open("https://bigbirdtweets.com")}/>
                            <img src={image2} alt="Chryso ZA" onClick={() => window.open("https://za.chryso.com/")}/>
                        </div>
                        <h3>Vacation internships:</h3>
                        <div className="vac-work">
                            <img src={image3} alt="Synthesis Software" onClick={() => window.open("https://www.synthesis.co.za/")}/>
                            <img src={image4} alt="Chryso ZA" onClick={() => window.open("https://www.entelect.co.za/")}/>
                        </div>
                    </div>
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