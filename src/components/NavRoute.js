import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import AnswerQuestionList from './AnswerQuestionList'
import UnAnswerQuestionList from './UnAnswerQuestionList'

export default class NavRoute extends Component {
    state={
        showUnAnsQue:true,
        showAnsQue:false
    }
    handleChangeUnAns=()=>{
        
        this.setState({
            showUnAnsQue:true,
            showAnsQue:false
        })
    }
    handleChangeAns=()=>{
        
        this.setState({
            showUnAnsQue:false,
            showAnsQue:true
        })
    }
    render() {
        return (
            <div>
                {/* https://react-bootstrap.github.io/components/navs/ */}
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Button variant="outline-secondary" onClick={this.handleChangeUnAns}>UnAnswerQuestions</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="outline-secondary" onClick={this.handleChangeAns}>AnswerQuestions</Button>
                    </Nav.Item>
                </Nav>
                {
                    this.state.showAnsQue ? <AnswerQuestionList></AnswerQuestionList> :null
                }
                {
                    this.state.showUnAnsQue ? <UnAnswerQuestionList></UnAnswerQuestionList>:null
                }
                
            </div>
        )
    }
}
