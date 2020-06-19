import React, { } from 'react';
import './App.css';

import VisibleAddBooks from './containers/VisibleAddBooks.js';
import VisibleLogin from './containers/VisibleLogin';
import VisibleRegistration from './containers/VisibleRegistration';
import VisibleReviews from './containers/VisibleReviews';
import VisibleUserList from './containers/User/VisibleUserList';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import VisibleBookList from './containers/VisibleBookList';
import NotFoundPage from './components/NotFoundPage'
import { ButtonGroup, Button } from '@material-ui/core'

const App = ({ isLogin, setToken, setState, role, activeUser }) => {

    const [isLoading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setToken()
        setState()
        setLoading(false)
    }, [])

    let btnGroup

    if (!isLogin) {
        btnGroup =
            <ButtonGroup className="right">
                <Button>
                    <Link to="/login"> Log in</Link>
                </Button >
                <Button>
                    <Link to="/register"> Register</Link>
                </Button>
            </ButtonGroup>
    }

    return isLoading ? <div> Loading </div> : (
        <div className="App">
            <Router>
                <header className="App-header">
                    Book Management
                    {btnGroup}
                    <br />
                    Role: {role}
                    <br />
                    Active: {activeUser}
                </header>

                <Switch>
                    <Route path="/login" >
                        <VisibleLogin />
                    </Route>
                    <Route path="/register" >
                        <VisibleRegistration />
                    </Route>
                    <Route path="/list" >
                        <VisibleBookList />
                    </Route>
                    <Route path="/users" >
                        <VisibleUserList />
                    </Route>
                    <Route path="/add" exact>
                        <VisibleAddBooks />
                    </Route>
                    <Route path="/edit/:id" exact render={
                        props => < VisibleAddBooks />
                    }>
                    </Route>
                    <Route path="/reviews/:id" render={
                        props => < VisibleReviews />
                    }>
                    </Route>
                    <Route component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
