import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <CssBaseline/>
                <AppBar>
                    <Toolbar>
                        <Typography type='title' color='inherit'>
                            Yahoo!ショッピングランキング
                        </Typography>
                    </Toolbar>
                </AppBar>

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
