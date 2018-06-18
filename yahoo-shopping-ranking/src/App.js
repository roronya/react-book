import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Nav/>
                <Route
                    path='/category/:id'
                    render={
                        ({match}) => <Ranking categoryId={match.params.id}/>
                    }/>
            </div>
        );
    }
}

export default App;
