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
import Swipeout from 'react-native-swipeout';


const BookItem = ({ book, deleteBook, navigation, role }) => {

    const handleDeleteBook = (item) => {
        deleteBook(item)
    }

    const showItemContent = item => {
        navigation.navigate('Manipulation', { book: item })
    };

    let swipeBtns;
    if (role === 'admin') {
        swipeBtns = [{
            text: 'Delete',
            backgroundColor: 'red',
            underlayColor: 'rgba(0,0,0,1,0.6)',
            onPress: () => { handleDeleteBook(book) }
        }]
    }

    return (
        <Swipeout right={swipeBtns}
            autoClose={true}
            backgroundColor='transparent' >
            <TouchableOpacity style = {styles.TouchableOpacity} onPress={() => showItemContent(book)}>
                <Text style={styles.item} >
                    {book.title}
                </Text>
            </TouchableOpacity>
        </Swipeout>
    )
}

const styles = StyleSheet.create({
    TouchableOpacity: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    item: {
        padding: 20,
        backgroundColor: 'yellow'
    }
})

export default BookItem