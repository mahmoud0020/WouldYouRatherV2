import React, { Component } from 'react'
import CardQuestion from './CardQuestion'
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
 class AnswerQuestionList extends Component {
    
    FilterAnswerQuestion =() =>{
        const result = this.props.AnswerdQuestionIds.filter((id)=>(
            this.props.users[this.props.authedUser].answers.hasOwnProperty(id)
        ))
        .sort((a,b)=>(
            this.props.questions[b].timestamp - this.props.questions[a].timestamp
        ))
        return result;
    }
    
    render() {
        const result =this.FilterAnswerQuestion();
        console.log(result,this.props.AnswerdQuestionIds);
        return (
            <div>
                {
                    result.length ?
                    result.map((answerId)=>{
                       return <CardQuestion  key={answerId} id={answerId}></CardQuestion>
                    }):
                    <Alert variant="success">
                        <Alert.Heading>Oh sorry</Alert.Heading>
                        <h1>No Answer Question found </h1>
                       
                    </Alert>
                }
            </div>
        )
    }
}
function mapStateToProps({authedUser,questions,users}){
    return {
    AnswerdQuestionIds: Object.keys(questions),
    questions:questions,
    authedUser:authedUser,
    users:users
    }
    
}

export default connect(mapStateToProps)(AnswerQuestionList);