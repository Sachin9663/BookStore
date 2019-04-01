import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import './App.css';
import Login from "./components/login";
import Books from "./components/book";

class App extends Component {
    state = {isAuth: false}

    isAuthenticated = (isAuth) => {
        this.setState({
            isAuth: isAuth
        })
    }
  render() {
    return (
        <div>
            <Router>
                <Route exact path={"/"}
                       render={(props) => <Login {...props}
                                                 loginCallback={this.isAuthenticated}
                                                 isAuth={this.state.isAuth}
                       />}
                />
                <PrivateRoute path={'/login'} component={Login} isAuth={this.state.isAuth}/>
                <PrivateRoute path={'/books'} component={Books} isAuth={this.state.isAuth}/>
            </Router>
        </div>

    );
  }
}

export default App;
const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
    if (isAuth === true) {
        return <Route {...rest} render={(props) => <Component {...props}/>}/>
    } else {
        console.log("Invalid login");
        return <Route {...rest} render={(props) => <Redirect {...props} to={'/'}/>
            // to={{pathname: '/', state: {error: {isError: true, message: 'login first'}}}}/>
        }/>
    }
}
