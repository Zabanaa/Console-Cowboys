import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import App from './App';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Publish from './pages/Publish';
import Preview from './pages/Preview';
import './index.css';

ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/publish" component={Publish} />
            <Route exact path="/preview" component={Preview} />
        </div>
    </BrowserRouter>,

    document.getElementById('root')

);
