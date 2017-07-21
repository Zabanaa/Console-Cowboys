import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import Main from './App';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './index.css';

ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
        </div>
    </BrowserRouter>,

    document.getElementById('root')

);
