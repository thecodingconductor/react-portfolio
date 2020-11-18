import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import css from '../images/css.svg';
import expressjs from '../images/expressjs.svg';
import html5 from '../images/html5.svg';
import javascript from '../images/logo-javascript.svg';
import mongoDB from '../images/mongoDB.svg';
import nodeJS from '../images/nodejs.svg';
import gitIcon from '../images/Git_icon.svg.png';
import python from '../images/python.svg';
import sass from '../images/sass-1.svg';
import react from '../images/reactIcon.png';

const About = () => {

    return (
        <Container>
            <div className="about-page-upper-container">
                <h1>Skills</h1>
                <div className="image-container">
                    <figure>
                        <img src={html5} alt="" />
                        <figcaption>HTML 5</figcaption>
                    </figure>
                    <figure>
                        <img src={css} alt="" />
                        <figcaption>CSS 3</figcaption>
                    </figure>
                    <figure>
                        <img src={javascript} alt="" />
                        <figcaption>Javascript</figcaption>
                    </figure>
                    <figure>
                        <img src={python} alt="" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure>
                        <img src={gitIcon} alt="" />
                        <figcaption>Git</figcaption>
                    </figure>
                    <figure>
                        <img src={sass} alt="" />
                        <figcaption>Sass</figcaption>
                    </figure>
                </div>
            </div>
            <div className="about-page-middle-container">
                <h1 className="whats-next-title">What's Next</h1>
                <div className="image-container whats-next-container">
                    <figure>
                        <img src={react} alt="" />
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src={expressjs} alt="" />
                        <figcaption>ExpressJS</figcaption>
                    </figure>
                    <figure>
                        <img src={nodeJS} alt="" />
                        <figcaption>NodeJS</figcaption>
                    </figure>
                    <figure>
                        <img src={mongoDB} alt="" />
                        <figcaption>MongoDB</figcaption>
                    </figure>

                </div>
            </div>
            <div className="about-me-text-container">
                <h1>About Me</h1>
                <p>My portfolio represents my learning in web development up to this point. I built these four websites using
                pure Javascript, HTML, CSS, and Flask. I intentionally avoided using any front end frameworks and libraries.
                I want to make sure that I had a thoroughly strong foundation in using Javascript, CSS and HTML without the
            use of frameworks. </p>
                <p>My next steps involve learning React, Node.js, Express, MongoDB, and more. Building these
                projects shows that I have everything it takes to quickly pick up these new technologies, and incorporate
            them into my existing projects, as well as creating new ones</p>
                <p>
                    My background in music has given me a strong foundation in the importance of focus, practice, discipline, and
                    time management. These qualities have served me well in my web development learning process, and will ensure
                    that I excel in this field. As a musician, your work is never over. You are on a lifelong journey of
                    discovery, learning, improvement. The same can be said about web development and computer science as a
                    whole. I find the process of solving problems using code to be endlessly challenging and fascinating, and I
                    am eager to continue my journey.
           </p>
                <p>
                    In my spare time, I run a twice weekly classical music-focused Twitch stream at <a
                        href="https://twitch.tv/orchestra_obsessed">twitch.tv/orchestra_obsessed</a>, write and record music,
            read, study scores, play video games, and spend time with friends and family.
           </p>

            </div>

        </Container>
    )
}

export default About;