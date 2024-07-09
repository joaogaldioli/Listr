import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

let customFonts = {
    'Satoshi-Black': require('../../../../assets/fonts/Satoshi-Black.otf')
};

const CalendarComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        async function loadFontsAndHideSplashScreen() {
            await Font.loadAsync(customFonts);
            setIsLoaded(true);
            await SplashScreen.hideAsync();
        }

        loadFontsAndHideSplashScreen();

        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const currentDay = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const currentWeekday = currentDay.slice(0, 3).toUpperCase();
    const month = new Date();
    const currentMonth = month.toLocaleString('en-US', { month: 'short' }).slice(0, 3).toUpperCase();
    const day = new Date();
    const currentDigit = day.toLocaleString('en-US', { day: '2-digit' });

    const unselectedDays = [];
    for (let i = -3; i <= 3; i++) {
        if (i !== 0) {
            const date = new Date();
            date.setDate(currentDate.getDate() + i);
            const dayDigit = date.toLocaleString('en-US', { day: '2-digit' });
            unselectedDays.push(dayDigit);
        }
    }

    if (!isLoaded) {
        return null; // Render nothing until fonts are loaded
    } else {
        return (
            <View style={{ flex: 0.15, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flex: 1, height: '10%', width: '90%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textShorthands}>{currentWeekday}</Text>
                    <View style={styles.calendarShell}>
                        <View style={styles.currentWeek}>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[0]}
                            </Text>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[1]}
                            </Text>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[2]}
                            </Text>
                            <View style={styles.selectedDayCircle}>
                                <Text style={styles.selectedDayText}>
                                    {currentDigit}
                                </Text>
                            </View>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[3]}
                            </Text>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[4]}
                            </Text>
                            <Text style={styles.unselectedDays}>
                                {unselectedDays[5]}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.textShorthands}>{currentMonth}</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    calendarShell : {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    textShorthands: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Satoshi-Black'
    },
    currentDayCircle: {
        height: '100%',
        width: Dimensions.get('window').height * 0.07,
        backgroundColor: 'blue',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedDayText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Satoshi-Black'
    },
    currentWeek: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: '100%', 
    },
    unselectedDays: {
        fontSize: 25,
        fontFamily: 'Satoshi-Black'
    },
    selectedDay: {
        fontSize: 30,
        fontFamily: 'Satoshi-Black',
        color: 'red'
    },
    selectedDayCircle: {
        height: Dimensions.get('window').height * 0.065,
        width: Dimensions.get('window').height * 0.065,
        backgroundColor: 'steelblue',
        borderRadius: Dimensions.get('window').height * 0.07 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CalendarComponent;
