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
    FlatList,
    TouchableOpacity
} from 'react-native';

import { Header } from 'react-native-elements';
import VisibleBookItem from '../screens/VisibleBookItem'
import Icon from 'react-native-vector-icons/Entypo'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { deleteBook } from '../actions';
// import Item from './Item'

const BookList = ({ route, navigation, books, activeUser, role, logOut, toggleLogin }) => {

    // const handleEditClick = () => {
    //     navigation.navigate('Manipulation')
    // }

    console.log(books)

    const handleLogout = () => {
        logOut()
        toggleLogin(false)
        navigation.navigate('Login')
    }

    return (
        <>
            <Header
                containerStyle={{ backgroundColor: 'green' }}
                style={styles.Header}
                leftComponent={<Icon.Button
                    backgroundColor="transparent"
                    color="black"
                    name="menu"
                    size={30}
                    onPress={() => navigation.openDrawer()}
                />}
                centerComponent={{ text: 'BookList' }}
                rightComponent={<Button color="black" style={styles.addBtn} title="Add" onPress={() => navigation.navigate('Manipulation')} />}
            />
            <SafeAreaView style={styles.SafeAreaView}>
                {/* <ScrollView style={styles.ScrollView}> */}
                <Text style={styles.title}> Book List </Text>
                <FlatList
                    data={books}
                    renderItem={({ item }) =>
                        <VisibleBookItem book={item}
                            navigation={navigation} />
                    }
                    keyExtractor={book => book._id}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'yellow'
    },
    SafeAreaView: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 50,
    },
    ScrollView: {
        flex: 1,
        backgroundColor: 'blue'
    },
    title: {
        fontSize: 30,
        padding: 30,
        textAlign: 'center',
        color: 'orange'
    },
    addBtn: {
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

export default BookList;
