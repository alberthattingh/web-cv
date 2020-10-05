import React from "react";
import "./content3.css";
// import image from "./icons8-next-page-50.png";

function onRankClick() {
    window.open("https://www.codewars.com/users/alberthattingh/");
}

function Content3(props) {
    const pageHandler = props.pageHandler;
    const stats = JSON.parse(props.data);
    const rows = [];

    if (stats != null) {
        const languages = stats['ranks']['languages'];

        for (var lang in languages) {
            rows.push(<tr><td>{lang.charAt(0).toUpperCase() + lang.slice(1)}</td>
                <td className="rank">{languages[lang]["name"]}</td></tr>);
        }
    }

    return(
        <div className="content-container">
            <section id="content3">
                <h1>My skills</h1>
                <p>
                    In my free time I enjoy doing coding challenges on Codewars.
                    See below for a list of languages I am proficient in, and my corresponding Codewars rank.
                </p>
                <div className="center-box">
                    <img id="c-rank"
                         src="https://www.codewars.com/users/alberthattingh/badges/micro"
                         alt="My Codewars rank"
                         onClick={onRankClick}/>
                    <table>
                        {rows}
                    </table>
                </div>
            </section>
            <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                 className="nextButton"
                 alt="Next button"
                 onClick={() => pageHandler(4)}/>
        </div>
    );
}

export default Content3;