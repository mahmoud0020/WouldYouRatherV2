import React, { Component } from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Login from './Login'
import Home from './Home';
import AddQuestion from './AddQuestion'
import DetailsQuestion from './DetailsQuestion';
import Error from './Error';
export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    
                     <Route exact path='/' component={Login}></Route>
                    <Route exact path='/leaderboard' component={Leaderboard}></Route>
                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/add' component={AddQuestion}></Route>
                    <Route  path='/questions/:id' component={DetailsQuestion}></Route>
                    <Route  component={Error}></Route>  
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
