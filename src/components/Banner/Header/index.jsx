import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink className="header__tittle" to="/photos">
                            Redux Project
                        </NavLink>

                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/sign-in"
                            activeClassName="header__link--active"
                        >
                            SignIn
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Header;