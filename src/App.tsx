import React from 'react';
import './reset.css'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Header from './components/Header/Header';

const App: React.FC = () => {
    const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
    const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
    const page3 = () => <div><h1>page3</h1>3枚目のページです</div>

    return (
        <div>
            <Router>
                <header className="App-header">
                    <Header/>
                </header>

                <div style={{marginLeft: '50px'}}>
                    <Switch>
                        <Route path='/' exact component={topPage}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/page2' exact component={page2}/>
                        <Route path='/page3' exact component={page3}/>
                        <Route exact component={topPage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
