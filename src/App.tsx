import React from 'react';
import './reset.css'
import './App.css'
import classes from "./App.module.scss";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import About from "./pages/About";

const App: React.FC = () => {
    const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
    const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
    const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
    const Menu = () => {
        return (
            <ul className={classes.menu}>
                <li className={classes.menu__link}><Link to='/'>top</Link></li>
                <li className={classes.menu__link}><Link to='/about'>about</Link></li>
                <li className={classes.menu__link}><Link to='/page2'>page2</Link></li>
                <li className={classes.menu__link}><Link to='/page3'>page3</Link></li>
            </ul>
        )
    }

    return (
        <div>
            <Router>
                <header className="App-header">
                    <Menu/>
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
