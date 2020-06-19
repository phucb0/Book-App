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

const Home = ({ role, activeUser, navigation }) => {

    return (
        <>
            <Header
                containerStyle = {{backgroundColor: 'red'}}
                style={styles.Header}
                leftComponent={<Icon.Button
                    backgroundColor="transparent"
                    color="blue"
                    name="menu"
                    size={30}
                    onPress={() => navigation.openDrawer()}
                />}

                centerComponent={{ text: 'Home' }}
            />
            <View style={styles.SafeAreaView}>
                <Text style={styles.title}>User: {activeUser} </Text>
                <Text style={styles.title}>Role: {role} </Text>
            </View>
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
    title: {
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

export default Home;
