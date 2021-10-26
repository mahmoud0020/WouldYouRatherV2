import React, { Component } from 'react'
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
 class CardQuestion extends Component {
    state={
        detailsQue:false
    }
    onClick=()=>{
        this.setState({
            detailsQue:true
        })
    }
    render() {
        
        return (
            <div>
                {
                    this.state.detailsQue ?
                    <Redirect to={`/questions/${this.props.id}`} ></Redirect>
                    :null
                }
                {/* https://react-bootstrap.github.io/components/cards/#content-types */}
                <Card className='justify-content-center' style={{ width: '500px' }}>
                    <Card.Img variant="top" src={this.props.author.avatarURL ? this.props.author.avatarURL : '' } />
                    <Card.Body>
                        <Card.Title>{this.props.author.name ? this.props.author.name : null}</Card.Title>
                        <Card.Text>
                        {this.props.question.optionOne.text ? this.props.question.optionOne.text : null}
                        </Card.Text>
                            <Button variant="primary" onClick={this.onClick}>ViewQuestion</Button>  

                        <small>{formatDate(this.props.question.timestamp)}</small>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];
    
	return {
		question:question,
		author: users[question.author] 
	};
}
export default  connect(mapStateToProps)(CardQuestion)