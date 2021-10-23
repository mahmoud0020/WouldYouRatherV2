import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import { handleAddAnswerQuestion } from '../actions/questions';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
 class UnAnswerQuestion extends Component {
    state={
        answer:''
    }
    onChange=(event)=>{
        
        this.setState({
            answer:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state.answer);
        this.props.dispatch(handleAddAnswerQuestion(this.props.id,this.state.answer))
    }
    
    render() {
        const {users,question}=this.props;

        return (
            <div>
            
                <Form onSubmit={this.handleSubmit}>
                        <div >author: {users[question[this.props.id].author].name}</div><br></br>
                    <input type="radio" value="optionOne" name="answer" id="optionOne" onChange={this.onChange}></input>
                    <label>{question[this.props.id].optionOne.text}</label>
                    <br></br>
                    <input type="radio" value="optionTwo" name="answer" id="optionTwo" onChange={this.onChange}></input>
                    <label>{question[this.props.id].optionTwo.text}</label>
                    <br></br>
                    <Button type="submit" variant="outline-dark">
                        Vote
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps({questions,users},{id}){
    return {
        question:questions,
        users:users,
        id:id
    }
}
export default connect(mapStateToProps)(UnAnswerQuestion)