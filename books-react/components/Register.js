import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';

const Register = ({ navigation, addUser, isRegisterSuccess }) => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    React.useEffect(() => {
        if (isRegisterSuccess) {
            navigation.navigate('Login')
        }
    }, [isRegisterSuccess])


    const handleUsernameChange = e => {
        setUsername(e);
    };

    const handlePasswordChange = e => {
        setPassword(e);
    };

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e);
    };

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

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.content}>
                <Text style={styles.label}> Username</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="username"
                    onChangeText={handleUsernameChange}
                />
                <Text style={styles.label}> Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder="password"
                    onChangeText={handlePasswordChange}
                />
                <Text style={styles.label}> Confirm Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder="password"
                    onChangeText={handleConfirmPasswordChange}
                />

                <Button title="Register"
                    onPress={onValidateRegister}></Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'lightblue',
        padding: 50,
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    content: {
        paddingTop: 100
    },
    label: {
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        margin: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default Register;
