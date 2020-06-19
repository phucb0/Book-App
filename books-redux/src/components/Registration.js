import React from 'react';
// import { addUser } from '../actions';
import {
    Redirect
} from 'react-router-dom'

const Registration = ({ addUser, isRegisterSuccess }) => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    if(isRegisterSuccess){
        return < Redirect to="/login" />
    }

    const onValidateRegister = (e) => {
        e.preventDefault()
        console.log('called')
        if (username.trim().length < 6 || username.trim().length > 12) {
            alert('Username must be between 6 and 12')
        } else if (password.trim().length < 6 || password.trim().length > 12) {
            alert('Password must be between 6 and 12')
        } else {
            // Server-side
            if (confirmPassword === password) {
                const user = {
                    username,
                    password
                }
                addUser(user)
            } else {
                alert('Please confirm your password')
            }
        }

        // Client - side

        // } else {
        //     const idx = users.findIndex(user => user.username === username)
        //     if (idx > -1) {
        //         alert('Username is existed')
        //     } else {
        //         if (confirmPassword === password) {
        //             const user = {
        //                 username: username,
        //                 password: password,
        //                 role: 2
        //             }
        //             addUser(user)
        //             setRegisterSuccess(true)
        //             alert('Register successfully')
        //         } else {
        //             alert('Please confirm your password')
        //         }
        //     }
        // }
    }

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value)
    }

    return (
        <form>
            <label>
                Username:
                <input type="text"
                    // name="name"
                    value={username}
                    onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password"
                    // name="password"
                    value={password}
                    onChange={handlePasswordChange} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password"
                    // name="name"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange} />
            </label>
            <br />
            <input type="submit" value="Register" onClick={onValidateRegister} />
        </form>
    )
}

export default Registration;