import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
export default class Navigation extends Component {
    render() {
        return (
            <div>
                {/* https://react-bootstrap.github.io/components/navbar/ */}
                <Container>
                    <Nav variant="pills" >
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="add" >Add Question</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
                <br></br>
            </div>
        )
    }
}
