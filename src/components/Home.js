import React, { Component } from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container'
import NavRoute from './NavRoute'


export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <Router> */}
                <Container>
                <Navigation></Navigation>
                    
                    <NavRoute>
                    </NavRoute>
                </Container>
                {/* </Router> */}
               
            </div>
        )
    }
}
