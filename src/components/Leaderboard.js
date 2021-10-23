import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Container from  'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
 class Leaderboard extends Component {
    SortUsers=()=>{
        const {users}= this.props;
        const usersIds=Object.keys(users).sort((a,b)=>{
            const scoreA =Object.keys(users[a].answers).length
             +users[a].questions.length;
            const scoreB =Object.keys(users[b].answers).length
            +users[b].questions.length;
            const rank=scoreB-scoreA
            return rank ;
        })  
        console.log(usersIds);
        return usersIds;
    }
    render() {
        const {users}= this.props;
        const resultSort =this.SortUsers();
        return (
            <div>
                <Container>
                    <Navigation></Navigation>
                    
                    <h2>welcome to leaderboard</h2>
                    {
                        resultSort.map((id)=>(
                            <Card className='justify-content-center' key={id} style={{ width: '500px' }}>
                            <Card.Img variant="top" src={users[id].avatarURL} />
                            <Card.Body>
                            <Card.Title>{users[id].name}</Card.Title>
                                <Card.Text>
                                    number Question Answer: {Object.keys(users[id].answers).length}
                                </Card.Text>
                                <Card.Text>
                                    number UnQuestion Answer: {Object.keys(users[id].questions).length}
                                </Card.Text>
                                <Card.Text>
                                    total score: {Object.keys(users[id].answers).length+ Object.keys(users[id].questions).length }
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        ))
                    }
                    
                </Container>

            </div>
        )
    }
}
function mapStateToProps({users},{id}){
    return{
        users:users,
        id:id
    }
}
export default connect(mapStateToProps)(Leaderboard)