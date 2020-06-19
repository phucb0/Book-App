/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    Text,
    StatusBar,
    TextInput,
    Button,
    SectionList,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { Header } from 'react-native-elements';
import VisibleUser from '../screens/VisibleUser'
import Icon from 'react-native-vector-icons/Entypo'
import UsersIcon from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { deleteBook } from '../actions';
// import Item from './Item'

const UserList = ({ route, navigation, users, activeUser, role, logOut, toggleLogin }) => {

    // const [userList, setUserList] = React.useState([])

    console.log(users)

    const handleLogout = () => {
        logOut()
        toggleLogin(false)
        navigation.navigate('Login')
    }

    navigation.setOptions({
        headerRight: () => {
            return <Button title="Add" onPress={() => navigation.navigate('Manipulation')} />;
        }
    });

    return (
        <>
            <Header
                style={styles.Header}
                leftComponent={<Icon.Button
                    backgroundColor="transparent"
                    color="black"
                    name="menu"
                    size={30}
                    onPress={() => navigation.openDrawer()}
                />}
                centerComponent={{ text: 'User List' }}
            />
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.Icon}>
                    <UsersIcon name="users" size={100} />
                </View>
                <FlatList
                    numColumns={2}
                    contentContainerStyle = {styles.FlatList}
                    data={users}
                    renderItem={({ item }) =>
                        <VisibleUser user={item}
                            navigation={navigation} />
                    }
                    keyExtractor={user => user._id}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 50,
    },
    ScrollView: {
        flex: 1,
        backgroundColor: 'blue'
    },
    Icon: {
        alignSelf: 'center',
        padding: 20
    },
    FlatList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    title: {
        padding: 30,
        fontSize: 30,
        textAlign: 'center',
        color: 'orange'
    },
    btn: {
        textAlign: 'left',
        justifyContent: 'flex-end',
        color: 'red'
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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        // marginVertical: 8,
        // marginHorizontal: 16,
        fontSize: 32,
    }
});

export default UserList;
