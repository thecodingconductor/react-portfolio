import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer className="footer d-flex flex-column align-items-center justify-content-center">
            <Container className="">
                <div className="copyright-info">
                    <p className="copyright-info-text">@2020 Tristan Rais-Sherman</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;