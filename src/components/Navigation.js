import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Redirect, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {LogoutAuthedUser} from '../actions/authedUser'
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

 class Navigation extends Component {
    state={
        logOut:false
    }
    handleLogoutUser =()=>{
        this.props.dispatch(LogoutAuthedUser())
        this.setState({
            logOut:true
        })
    }
    render() {
        return (
            <div>
                
                {this.state.logOut ? <Redirect to={{pathname:'/'}}></Redirect>:null}

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
                        
                        <Button variant="outline-dark" onClick={this.handleLogoutUser} className="mt-3 mt-lg-0">
							Logout
						</Button>
                        </Nav>
                </Container>
                <br></br>
            </div>
        )
    }
}


export default connect()(Navigation)