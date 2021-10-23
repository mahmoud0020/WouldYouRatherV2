import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
 class AddQuestion extends Component {
     state={
        questionOne:'',
        questionTwo:'',
        direct:false,
     }
     // this for the input text one
    handleChangeQuestionOne=(event)=>{
        const QuestionOne=event.target.value;
        this.setState({
            questionOne:QuestionOne
        })
    }
    // this for the input text two 
    handleChangeQuestionTwo=(event)=>{
        const QuestionTwo=event.target.value;
        this.setState({
            questionTwo:QuestionTwo
        })
    }
    // this for handle submit action and dispathc question 
    handleSubmit=(event)=>{
        event.preventDefault()
        
        this.props.dispatch(handleAddQuestion(this.state.questionOne,this.state.questionTwo));
        this.RedirectToHome();
    }
    RedirectToHome=()=>{
        this.setState({
            direct:true
        })
    }
     
   
    render() {
       
        return (
            
            <div>
                <Container>
                    <Navigation></Navigation>
                { this.state.direct ? <Redirect to='/home'></Redirect>:null}
                <Form  style={{width:'500px'}} onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-algin-center'>question one </Form.Label>
                        <Form.Control type="text" placeholder="Enter question one" required onChange={this.handleChangeQuestionOne}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-algin-center'>question two </Form.Label>
                        <Form.Control type="text" placeholder="Enter question two" required onChange={this.handleChangeQuestionTwo}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Container>
                 
            </div>
        )
    }
}
export default connect()(AddQuestion)