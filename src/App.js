import React, { Component } from 'react'
import Login from './components/Login' 
import { handleInitialData } from '../src/actions/shared';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Router from './components/Router';
 class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  handleRouter=()=>{
    if(!this.props.authedUser){
      return <Login/>;
    }else{
      return (
        <Router>
          <Navigation></Navigation>
        </Router>
      )
    }
  }
  render() {
    
    return (
      <div>
        
        {this.handleRouter()}
        
        
      </div>
    )
  }
}
function mapStateToProps({authedUser}){
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(App)