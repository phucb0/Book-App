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
    TouchableHighlight
} from 'react-native';

import Swipeout from 'react-native-swipeout';


const User = ({ user, navigation }) => {

    const showBookOfUser = () => {

        navigation.navigate('Book List by User', { user: user });
    }

    return (
        <TouchableHighlight style={styles.TouchableHighlight} onPress={showBookOfUser}>
            <Text style={styles.item} >
                {user.username}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    TouchableHighlight: {
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'pink',
    },
    item: {
        fontSize: 20,
        padding: 10
    }
})

export default User