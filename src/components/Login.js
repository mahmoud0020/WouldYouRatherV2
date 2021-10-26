import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

// bootstrap import 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { setAuthedUser } from '../actions/authedUser';
 class Login extends Component {
    
    state={
        direct:false
    }
    handleSelectChange=()=>{
       var element = document.getElementById('inlineFormCustomSelect')
       var userId = element.value;
       return userId;
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        const userId=this.handleSelectChange();
        this.props.dispatch(setAuthedUser(userId));
        this.RedirectToHome();
    }  
    RedirectToHome=()=>{
        this.setState({
            direct:true
        })
    }
    render() {
        
        const {users} =this.props;
        const authedUser=Object.keys(users);
        return (
            <div>
              { this.state.direct ? <Redirect to='/home'></Redirect>:null}
                {/* this is bootstap style https://react-bootstrap.github.io/components/forms/ */}
                
                <Form onSubmit={this.handleFormSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto" className="my-1 ">
                        <Form.Label
                            className="me-sm-2"
                            htmlFor="inlineFormCustomSelect"
                            visuallyHidden
                        >
                            Preference
                        </Form.Label>
                        <Form.Select  onChange={this.handleSelectChange} className="me-sm-2" style={{width:'400px'}} id="inlineFormCustomSelect">
                            <option value="0">Choose...</option>
                            {authedUser.map((user) => (
                                <option value={users[user].id} key={users[user].id} id={users[user].id}>
                                    {users[user].name}
                                </option>
                            ))}
                        </Form.Select>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit" >Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
        
    }
    
}


function mapStateToProps({users}){
    return {
        users:users,
    }
}
export default connect(mapStateToProps)(Login)