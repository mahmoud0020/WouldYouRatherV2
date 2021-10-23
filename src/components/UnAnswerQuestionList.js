import React, { Component } from 'react'
import CardQuestion from './CardQuestion'
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
class UnAnswerQuestionList extends Component {
    FilterUnAnswerQuestion =() =>{
        const result = this.props.UnAnswerdQuestionIds.filter((id)=>(
            !this.props.users[this.props.authedUser].answers.hasOwnProperty(id)
        ))
        .sort((a,b)=>(
            this.props.questions[b].timestamp - this.props.questions[a].timestamp
        ))
        return result;
    }
    render() {
        const result =this.FilterUnAnswerQuestion();
        return (
            <div>
                {
                    result.length ?
                    result.map((answerId)=>{
                       return <CardQuestion key={answerId} id={answerId}></CardQuestion>
                    }):
                    <Alert variant="success">
                        <Alert.Heading>Oh sorry</Alert.Heading>
                        <h1>No UnAnswer Question found </h1>
                       
                    </Alert>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users}){
    return {
    UnAnswerdQuestionIds: Object.keys(questions),
    questions:questions,
    authedUser:authedUser,
    users:users
    }
    
}
export default connect(mapStateToProps)(UnAnswerQuestionList)