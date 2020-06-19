import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import VisibleLogin from './screens/VisibleLogin'
import VisibleRegister from './screens/VisibleRegister'
import VisibleManipulation from './screens/VisibleManipulation'
import VisibleBookList from './screens/VisibleBookList'
import VisibleBookListByUser from './screens/VisibleBookListByUser'
import VisibleUserList from './screens/VisibleUserList'
import VisibleRoot from './screens/VisibleRoot'
import VisibleProfile from './screens/VisibleRoot'
import { Provider } from 'react-redux'
import store from './store'
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
import Icon from 'react-native-vector-icons/Entypo'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Book List"
                component={VisibleBookList}
            />
            <Tab.Screen name="User List"
                component={VisibleUserList}
            />
        </Tab.Navigator>
    );
}

export default function App({ setState, setToken }) {

    Icon.loadFont();

    console.log('app-run ')

    const [isLoading, setLoading] = React.useState(true)
    // const navigation = useNavigation();
    // console.log(navigation)


    React.useEffect(() => {
        // checkAuth();
        setToken()
        setState()
        setLoading(false)
    }, [])

    return isLoading ? <Text>Loading</Text> : (
        <NavigationContainer>
            <Stack.Navigator
                //  screenOptions={{headerShown: false}} 
                initialRouteName="Login">
                <Stack.Screen style={styles.homeScreen}
                    name="Login"
                    component={VisibleLogin}
                />
                <Stack.Screen name="Root"
                    component={VisibleRoot}
                    // component={HomeTabs}
                    options={props => {
                        return {
                            headerShown: false,
                            headerLeft: null,
                            headerStyle: {
                                backgroundColor: 'yellow',
                            },
                        }
                    }}
                />
                <Stack.Screen name="Manipulation" component={VisibleManipulation} />
                <Stack.Screen name="Book List" component={VisibleBookList} />
                <Stack.Screen name="User List" component={VisibleUserList} />
                <Stack.Screen name="Profile" component={VisibleProfile} />
                <Stack.Screen name="Register" component={VisibleRegister} />
                <Stack.Screen name="Book List by User" component={VisibleBookListByUser}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = {
    homeScreen: {
        header: null
    }
}
