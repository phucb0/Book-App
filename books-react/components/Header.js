import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style = {styles.header}>
            <View>
                <Text style = {styles.headerText}> {title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: '100%',
        
    }
})