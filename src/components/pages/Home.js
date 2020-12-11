import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import tristan from '../images/Tristan_Rais_Sherman_0036_web_DO_NOT_PRINT.jpg';
import tristan from '../images/tristanSitting.jpg'
import ConcertBuilderShowcase from '../projects/ConcertBuilderShowcase';
import OrchesNationShowcase from '../projects/OrchesNationShowcase';
import MarsRoverShowcase from '../projects/MarsRoverShowcase';


const Home = () => {



    return (
        <Container className="website-title-container">
            <div className="d-flex align-items-center justify-content-center top-container">
                <h1 className="website-title">
                    Tristan is a front-end developer.
                </h1>
                {/* <img src={tristan} alt="Tristan Headshot" className="tristan-headshot" /> */}
            </div>

            <Container className="projects-showcase-container">

                <ConcertBuilderShowcase />
                <OrchesNationShowcase />
                <MarsRoverShowcase />


            </Container>
        </Container>
    )
}

export default Home;
