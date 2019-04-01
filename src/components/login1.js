import React, { Component } from 'react';
// // import BookList from './components/BookList';
// import {
// BrowserRouter as Router,
// // Route,
// // Link,
// Redirect,
// Switch
// } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: {
                username: 'ttn',
                password: 'ttn'
            },
            error: false
        }
    }

    handleLogin = (e) => {
        const { username, password, error } = this.state;
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, error, auth } = this.state;
        if (username === auth.username && password === auth.password) {
            this.setState({
                    error: false
                }, () => this.props.loginCallback()
            )
        }

        else {
            this.setState({
                username: '',
                password: '',
                error: true
            })
        }
    }

    render() {
        const { username, password, error } = this.state;
        const { isAuth } = this.props;

// if (isAuth) {
// return <Redirect to="/booklist" />;
// }

        return (
            <div>
                <form>
                    <label> Username: </label>

                    <input type="text"
                           placeholder="enter username"
                           onChange={this.handleLogin} required
                           name="username"
                        // value ={username}
                    />


                    <label> Password: </label>

                    <input type="password"
                           placeholder="enter password"
                           onChange={this.handleLogin} required
                           name="password"
                        // value={password}
                    />

                    <input type="button"
                           onClick={this.handleSubmit}
                           value='Submit'
                    />
                </form>

                {
                    (!this.state.error) ?
                        (<span>Successfully logged in</span>) :
                        (<span>Incorrect Username/Password</span>)
                }

            </div>
        );
    }
}

export default Login;