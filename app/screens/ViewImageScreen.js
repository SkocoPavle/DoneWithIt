import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/Colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.DeleteIcon}></View>
            <Image resizeMode="contain" source={require('../assets/bed.jpg')} style={styles.Image}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#000",
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    DeleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    Image: {
        width: '100%',
        height: '100%',
    },

})