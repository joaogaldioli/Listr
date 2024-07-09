import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';
import { Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

let customFonts = {
    'Satoshi-Black': require('../../../../assets/fonts/Satoshi-Black.otf')
};

const HeaderComponent = () => {
    const [isReady, setIsReady] = useState(false);
    const [time, setTime] = useState(getFormattedTime());

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync(customFonts);
            setIsReady(true);
            await SplashScreen.hideAsync();
        }

        loadFonts();

        const interval = setInterval(() => {
            setTime(getFormattedTime());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function getFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() % 12 || 12;
        const minutes = currentDate.getMinutes();
        const amOrPm = currentDate.getHours() < 12 ? 'AM' : 'PM';
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
    }

    if (!isReady) {
        return null; // Render nothing until fonts are loaded
    }

    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.gearIcon} icon={faBars} size={30} color='white' />
            <Text style={styles.title}>{time}</Text>
            <FontAwesomeIcon style={styles.gearIcon} icon={faGear} size={30} color='white' />
        </View>
    );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const containerHeight = windowHeight * 0.1;
const containerWidth = windowWidth * 0.9;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        marginTop: 25,
        height: containerHeight,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Satoshi-Black',
        fontSize: 35,
        color: 'white',
    },
    gearIcon: {
        color: 'white',
    },
    barIcon: {
        color: 'white',
    },
});

export default HeaderComponent;
