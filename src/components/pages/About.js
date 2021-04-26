import React, { Fragment, useContext, useEffect } from 'react';
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
import NavContext from '../../context/nav/navContext'

const About = () => {

    const navContext = useContext(NavContext);
    const {hideModalFunc} = navContext

    useEffect(() => {
        window.scrollTo(0, 0)
        hideModalFunc();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <div className="about-me-text-container">
                <h1>About Me</h1>
                <p>I am a self-taught web developer based in New York City, focusing on front-end web technologies. I am experienced working mainly in the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as Python. I am passionate about creating innovative, dynamic, and modern solutions, and am committed to the values of cooperation, communication, and competence. In addition to my work as a web developer, I am a classically trained orchestral conductor, music producer, cellist, and guitarist.
 </p>
                <p>My portfolio features both front-end and full stack applications that I have built from scratch. All the projects feature the most current best practices in web development, with React Hooks, Sass, ES6, and Mobile-First design. The exception to this is Concert Builder, which was an exercise in building a large-scale application without the convenience of any front-end Javascript library or framework.
</p>
                <p>
                    My background in music has given me a strong foundation in the importance of practice, discipline, leadership, communication, and teamwork. These qualities make me a valuable addition to any project or team. I pride myself on the ability to find solutions and get the job done, no matter what it takes.  As a musician, your work is never over. You are on a lifelong journey of discovery, learning, and improvement. The same can be said about web development and computer science as a whole. I find the process of solving problems using code to be endlessly challenging and fascinating, and I am eager to continue my journey.
           </p>
                <p>
                    In my spare time, I run a twice weekly classical music-focused Twitch stream at <a
                        href="https://twitch.tv/orchestra_obsessed">twitch.tv/orchestra_obsessed</a>, write and record music,
            read, study scores, play video games, and spend time with friends and family.
           </p>

            </div>
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
                        <img src={react} alt="" className="react-icon" />
                        <figcaption>React</figcaption>
                    </figure>
                </div>
            </div>
            <div className="about-page-middle-container">
                <h1 className="whats-next-title">What's Next</h1>
                <div className="image-container whats-next-container">

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


        </Container>
    )
}

export default About;