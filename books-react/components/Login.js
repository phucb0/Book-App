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
    Image
} from 'react-native';

import {useSelector} from 'react-redux'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import VisibleLogin from '../screens/VisibleLogin'
import VisibleRegister from '../screens/VisibleRegister'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { checkAuth } from '../actions';

const Tab = createBottomTabNavigator();

const Login = ({ isRegisterSuccess, setRegisterSuccess, validateLogin, getBookList }) => {

    const navigation = useNavigation();

    const isLogin = useSelector(state => state.users.isLogin)

    const [username, setUsername] = React.useState('anhphuc311');
    const [password, setPassword] = React.useState('lenhu154');

    React.useEffect(() => {
        console.log('use-effect')

        if (isLogin) {
            getBookList();
            // setRegisterSuccess()
            console.log('called')
            navigation.navigate('Root');
        }

    }, [isLogin]);

    React.useEffect(() => {

        if (isRegisterSuccess) {
            setRegisterSuccess()
        }
    }, [isRegisterSuccess]);


    const handleRegisterClick = () => {
        console.log('called')
        navigation.navigate('Register');
    };

    const handleUsernameChange = e => {
        setUsername(e);
    };

    const handlePasswordChange = e => {
        setPassword(e);
    };

    const onValidateLogin = e => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please fill all information');
        } else {

            const user = {
                username,
                password,
            };
            validateLogin(user);
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Book Management</Text>
            <View>
                <Image style={styles.Logo} source={require('../assets/images/book.jpg')} />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}> Username</Text>
                <TextInput
                    value={username}
                    style={styles.textInput}
                    placeholder="username"
                    onChangeText={handleUsernameChange}
                />
                <Text style={styles.label}> Password</Text>
                <TextInput
                    value={password}
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder="password"
                    onChangeText={handlePasswordChange}
                />
                <Button title="Login"
                    onPress={onValidateLogin} />

                <Button title="Register"
                    onPress={handleRegisterClick} />
            </View>

            {/* <Tab.Navigator>
                <Tab.Screen name="Login" component={VisibleLogin} />
                <Tab.Screen name="Register" component={VisibleRegister} />
            </Tab.Navigator> */}

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
        paddingBottom: 30,
        textAlign: 'center',
    },
    Logo: {
        alignSelf: 'center'
    },
    content: {
        paddingTop: 100,
    },
    label: {
        fontSize: 20,
        textAlign: 'center',
    },
    textInput: {
        margin: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default Login;
