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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Item = ({ navigation, title }) => {

    console.log(title)

    const showContent = () => {
        navigation.navigate('Manipulation', {name: title})
    };

    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTitle} >{title}</Text>
            <Button title="Show detail"
                onPress={showContent} />
        </ TouchableOpacity >
    );
};

const styles = {
    item: {
        backgroundColor: 'pink',
        margin: 10
    }, 
    itemTitle: {
        color: 'blue',
        fontSize: 30,
        textAlign: 'center'
    }
}

export default Item; 
