import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
class AnswerQuestion extends Component {
    
    render() {
        const {question,users} =this.props;
        const totalNumVote=question[this.props.id].optionOne.votes.length + question[this.props.id].optionTwo.votes.length;
        const OnePrecent=question[this.props.id].optionOne.votes.length;
        const TwoPercent=question[this.props.id].optionTwo.votes.length;

        return (
            <div>
                {/* https://react-bootstrap.github.io/components/progress/ */}
                <div>author: {users[question[this.props.id].author].name}</div>
                <div># {question[this.props.id].optionOne.text}</div>
                <ProgressBar now={Math.round((OnePrecent/totalNumVote)*100)} label="" />
                <br></br>
                <div># {question[this.props.id].optionTwo.text}</div>
                <ProgressBar now={Math.round((TwoPercent/totalNumVote)*100)} label="" />
                <br></br>
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
export default connect(mapStateToProps)(AnswerQuestion)