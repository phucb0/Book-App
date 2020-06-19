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
import BackIcon from 'react-native-vector-icons/Ionicons'

const Manipulation = ({ route, navigation, updateBook, addBook, activeUser }) => {

    const [bookTitle, setBookTitle] = React.useState('');
    const [bookAuthor, setBookAuthor] = React.useState('');
    const [bookQuantity, setBookQuantity] = React.useState('');

    React.useEffect(() => {
        if (route.params) {
            console.log('has route');
            setBookTitle(route.params.book.title);
            setBookAuthor(route.params.book.author);
            setBookQuantity(route.params.book.quantity);
        } else {
            console.log('donot have route');
        }
    }, [route.params]);

    const handleAddBook = () => {
        console.log('called');

        if (!bookTitle || !bookAuthor || !bookQuantity) {
            alert('Please fill all information');
        } else {
            const newBook = {
                owner: activeUser,
                title: bookTitle,
                author: bookAuthor,
                quantity: bookQuantity,
            };
            console.log('called');
            console.log(newBook);
            addBook(newBook);
            navigation.goBack();
        }
    };

    const handleSaveChanges = () => {
        console.log('called');

        if (!bookTitle || !bookAuthor || !bookQuantity) {
            alert('Please fill all information');
        } else {
            const title = bookTitle;
            const author = bookAuthor;
            const quantity = bookQuantity;
            const _id = route.params.book._id;

            const newData = {
                _id,
                title,
                author,
                quantity,
            };
            updateBook(newData);
            navigation.goBack();
        }
    };

    navigation.setOptions({
        headerLeft: () => {
            return < BackIcon style={styles.BackIcon} name="ios-arrow-back" size={30} onPress={() => navigation.goBack()} />;
        },
        headerRight: () => {
            if (route.params) {
                return <Button title="Save"
                    onPress={handleSaveChanges} />;
            } else {
                return <Button title="Add"
                    onPress={handleAddBook} />;
            }
        },
    });

    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.title}> Manipulation Form </Text>
            <Text style={styles.label}> Title</Text>
            <TextInput
                style={styles.textInput}
                placeholder="title"
                defaultValue={bookTitle}
                onChangeText={(text) => setBookTitle(text)}
            />
            <Text style={styles.label}> Author</Text>
            <TextInput
                style={styles.textInput}
                placeholder="author"
                defaultValue={bookAuthor}
                onChangeText={(text) => setBookAuthor(text)}
            />
            <Text style={styles.label}> Quantity</Text>
            <TextInput
                style={styles.textInput}
                placeholder="quantity"
                defaultValue={String(bookQuantity)}
                keyboardType="numeric"
                onChangeText={(text) => setBookQuantity(text)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#999999',
        padding: 50,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
    BackIcon: {
        marginLeft: 15
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

export default Manipulation;
