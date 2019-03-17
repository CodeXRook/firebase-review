import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './component/header';
import Home from'./containers/home';


class App extends Component {
    render () {
        return (
            <HashRouter>
                <>
                <Route path='/' component={ Header } />
                <div className='container mt-5'>
                <Route path='/' exact component={ Home } />

                </div>
                </>
           </HashRouter>
        );
    }
}

export default App;