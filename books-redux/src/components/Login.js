import React from 'react';
// import { addUser } from '../actions';
import {
    Redirect
} from 'react-router-dom'

const Login = ({ getBookList, isLogin, validateLogin, setRegisterSuccess }) => {

    const [username, setUsername] = React.useState('anhphuc311')
    const [password, setPassword] = React.useState('lenhu154')
    const [rememberPassword, setRememberPassword] = React.useState(false)
    // const [isSuccess, setSuccess] = React.useState(false)    

    React.useEffect(() => {
        setRegisterSuccess()
    }, [])

    if (isLogin) {
        const url = "/list"
        getBookList()
        return <Redirect to={url} />
    }

    const onValidateLogin = e => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please fill all information')
        } else {

            // Client-side
            // const idx = users.findIndex(user => user.username === username
            //     && user.password === password)
            // if (idx > -1) {
            //     setSuccess(true)
            //     isLogin(true)
            //     console.log(username)
            //     setActiveUser(username)
            // } 

            // Server-side 
            const user = {
                username,
                password
            }
            validateLogin(user)
        }
    }

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRememberPasswordChange = e => {
        setRememberPassword(e.target.checked)
        if (rememberPassword) {

        }
    }

    return (
        <form>
            <label>
                Username:
                <input type="text"
                    name="name"
                    value={username}
                    onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password"
                    name="name"
                    value={password}
                    onChange={handlePasswordChange} />
            </label>
            <br />
            <label>
                <input type="checkbox"
                    name="remember"
                    value={rememberPassword}
                    onChange={handleRememberPasswordChange} />
                Remember Password ?
            </label>
            <br />
            <input type="submit" value="Log in" onClick={onValidateLogin} />
        </form>
    )
}

export default Login;