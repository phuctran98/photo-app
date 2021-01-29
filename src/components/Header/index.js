import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container,Row,Col,Button } from "reactstrap";

import "./Header.scss";

function Header(props){
    return(
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink  
                                exact
                                className="header__tittle"
                                to="/photos"
                                 >
                            PhotoApp
                        </NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink 
                                exact
                                className="header__link"
                                to="./photos/add"
                                activeClassName="header__link--active">
                            Sign In
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header