import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Login from './Login'
import Home from './Home';
import AddQuestion from './AddQuestion'
import DetailsQuestion from './DetailsQuestion';
export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/leaderboard' component={Leaderboard}></Route>
                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/add' component={AddQuestion}></Route>
                    <Route  path='/questions/:id' component={DetailsQuestion}></Route>
                    
                </BrowserRouter>
            </div>
        )
    }
}
