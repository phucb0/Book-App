import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VisibleBookList from '../screens/VisibleBookList'
import VisibleUserList from '../screens/VisibleUserList'
import VisibleHome from '../screens/VisibleHome'
import VisibleProfile from '../screens/VisibleProfile'
import Icon from 'react-native-vector-icons/Entypo'
import BookIcon from 'react-native-vector-icons/Feather'
import UserIcon from 'react-native-vector-icons/AntDesign'
import ProfileIcon from 'react-native-vector-icons/AntDesign'
import HomeIcon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native';

const Drawer = createDrawerNavigator()

const Root = ({ logOut, toggleLogin, navigation, role }) => {

    const handleLogout = () => {
        logOut()
        toggleLogin(false)
        navigation.navigate('Login')
    }

    let userDrawer;
    if (role === 'admin') {
        userDrawer = <Drawer.Screen name="User List" component={VisibleUserList}
            options={{
                drawerIcon: config => <UserIcon name="user" size={30} />
            }} />
    }

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList style={styles.drawerItemList} {...props} />
                    <DrawerItem labelStyle={styles.drawerItemLabel} style={styles.drawerItem} label="Log out" onPress={handleLogout} />
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen name="Home"
                component={VisibleHome}
                options={{
                    drawerIcon: config => <HomeIcon name="home" size={30} />
                }}
            />
            <Drawer.Screen name="Profile"
                component={VisibleProfile}
                options={{
                    drawerIcon: config => <ProfileIcon name="home" size={30} />
                }}
            />
            <Drawer.Screen name="Book List" component={VisibleBookList}
                options={{
                    drawerIcon: config => <BookIcon name="book-open" size={30} />
                }} />
            {userDrawer}
        </Drawer.Navigator>
    );
}

const styles = {
    button: {
        textAlign: 'center',
        fontSize: 50
    },
    drawerItemList: {
        flexDirection: 'row',
        display: 'flex'
    },
    drawerItemLabel: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    drawerItem: {
        alignItems: 'center',
        backgroundColor: 'red',
        top: 500,
    }
}

export default Root;