import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                {/* <h1 className="footer-header-text">Follow me on: </h1> */}
                <div className="copyright-info">
                    <p>@2020 Tristan Rais-Sherman</p>

                </div>
            </Container>
        </footer>
    )
}

export default Footer;