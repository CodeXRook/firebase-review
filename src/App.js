import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './component/header';

class App extends Component {
    render () {
        return (
            <HashRouter>
                <>
                <Route path='/' component={ Header } />

                </>
           </HashRouter>
        );
    }
}

export default App;