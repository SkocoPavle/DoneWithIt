import React from 'react';
import { ImageBackground ,StyleSheet, View, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/solid-color-phone-8398n5pe9l51eh1q.jpg')} style = {styles.bacground}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/favicon.png')} style={styles.logo}/>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    bacground: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
        registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    }
})