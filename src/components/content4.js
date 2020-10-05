import React from 'react';
import "./content4.css";

function onProfileClick() {
    window.open("https://github.com/alberthattingh");
}

function Portfolio(props) {
    const profile = JSON.parse(props.profile);
    const repos = JSON.parse(props.repos);
    let projects = [];


    return(
        <div className="row-box">
            <div className="card" onClick={onProfileClick}>
                <img src={profile.avatar_url} alt="Github avatar" id="avatar"/>
                <h3 id="display-name">{profile.name}</h3>
                <h4 id="username">@{profile.login}</h4>
            </div>
            <div className="projects-container">
                <ul id="projects">
                    {projects}
                </ul>
            </div>
        </div>
    );
}

function Content4(props) {
    const pageHandler = props.pageHandler;
    const data_array = props.data;
    let fetch_success = false;

    let profile;
    let repos;

    if (data_array != null) {
        if (data_array.length > 0 && Array.isArray(data_array)) {
            fetch_success = true;
            profile = data_array[0];
            repos = data_array[1];
        }
    }

    return(
        <div className="content-container">
            <section id="content4">
                <h1>Portfolio</h1>
                {fetch_success ? <Portfolio profile={profile}
                                            repos={repos}/> : <div className="loader"><div></div><div></div></div>}
            </section>
            <img src="https://img.icons8.com/ios/100/000000/circled-chevron-right.png"
                 className="nextButton"
                 alt="Next button"
                 onClick={() => pageHandler(5)}/>
        </div>
    );
}

export default Content4;