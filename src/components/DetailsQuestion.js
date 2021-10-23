import React, { Component } from 'react'
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'
import Navigation from './Navigation';
import AnswerQuestion from './AnswerQuestion'
import UnAnswerQuestion from './UnAnswerQuestion'

class DetailsQuestion extends Component {
    toggleBetweenAnsAndQue=()=>{
        const id =this.props.match.params.id
        
        const result = this.props.users[this.props.authedUser].answers.hasOwnProperty(id)
        console.log(result)
        return result;
    }
    render() {
        const show =this.toggleBetweenAnsAndQue()
        return (
            <div>
                <Container>
                    <Navigation></Navigation>
                    {
                        show ? <AnswerQuestion id={this.props.match.params.id}></AnswerQuestion> 
                        : <UnAnswerQuestion id={this.props.match.params.id}></UnAnswerQuestion>
                    }
                </Container>
            </div>
        )
    }
}
function mapStateToProps({authedUser,users}){
    return {
        authedUser:authedUser,
        users:users
    }
}
export default connect(mapStateToProps)(DetailsQuestion)