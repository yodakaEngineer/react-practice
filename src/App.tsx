import React from 'react';
import './reset.css'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import About from "./pages/About/About";
import Header from './components/Header/Header';
import Index from "./pages/Index/Index";
import List from "./pages/List/List";

const App: React.FC = () => {
    const page3 = () => <div><PageHeader>Page3</PageHeader>3枚目のページです</div>

    return (
        <div>
            <Router>
                <header className="App-header">
                    <Header/>
                </header>

                <div style={{marginLeft: '50px'}}>
                    <Switch>
                        <Route path='/' exact component={Index}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/list' exact component={List}/>
                        <Route path='/page3' exact component={page3}/>
                        <Route exact component={Index}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

export const PageHeader = styled.h1`
margin: 1rem 0;
font-size: 2rem;
`
