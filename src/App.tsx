import React from 'react';
import './reset.css'
import './App.css'
import classes from "./App.module.scss";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


const App: React.FC = () => {
    const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
    const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
    const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
    const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
    const Menu = () => {
        return (
            <ul className={classes.menu}>
                <li className={classes.menu__link}><Link to='/'>top</Link></li>
                <li className={classes.menu__link}><Link to='/page1'>page1</Link></li>
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
                        <Route path='/page1' exact component={page1}/>
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
