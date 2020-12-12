import React from 'react'
import {Link, Route} from 'react-router-dom'
import About from "./About";
import Home from "./Home";
import Profile from "./Profile"
import Profiles from "./Profiles";
import './App.css';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About}/>
            <Route path="/profile/:username" component={Profile}/>
            <Route path="/profiles" component={Profiles} />
        </div>
    )
}

export default App;
