import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button
} from 'react-native';
import { Header } from 'react-native-elements';
import BackIcon from 'react-native-vector-icons/Ionicons'

const Profile = ({ route, navigation, updateBook, addBook, activeUser }) => {

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

    navigation.setOptions({
        headerRight: () => {
            return <Button title="Save"
                onPress={handleSaveChanges} />;
        },
    });

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

    return (
        <>
        <Header
                containerStyle={{ backgroundColor: 'green' }}
                style={styles.Header}
                leftComponent={<BackIcon.Button
                    backgroundColor="transparent"
                    color="black"
                    name="ios-arrow-back"
                    size={30}
                    onPress={() => navigation.goBack()}
                />}
                centerComponent={{ text: 'Profile' }}
                rightComponent={<Button color="black" style={styles.addBtn} title="Save" onPress={() => navigation.navigate('Manipulation')} />}
            />
        <ScrollView style={styles.scrollView}>
            <Text style={styles.label}> First name</Text>
            <TextInput
                style={styles.textInput}
                placeholder="title"
                defaultValue={bookTitle}
                onChangeText={(text) => setBookTitle(text)}
            />
            <Text style={styles.label}> Last name</Text>
            <TextInput
                style={styles.textInput}
                placeholder="author"
                defaultValue={bookAuthor}
                onChangeText={(text) => setBookAuthor(text)}
            />
            <Text style={styles.label}> Password</Text>
            <TextInput
                style={styles.textInput}
                placeholder="quantity"
                defaultValue={String(bookQuantity)}
                keyboardType="numeric"
                onChangeText={(text) => setBookQuantity(text)}
            />
        </ScrollView>
        </>
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

export default Profile;
