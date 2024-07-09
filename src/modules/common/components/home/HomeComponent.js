import HeaderComponent from './header/HeaderComponent';
import AdComponent from './ad/AdComponent';
import CalendarComponent from './calendar/CalendarComponent';
import { StyleSheet, View } from 'react-native';

const HomeComponent = () => {

    openSettings = () => {
        console.log('Settings button clicked.');
    };

    openModules = () => {
        console.log('Modules button clicked.');
    };

    addTask = () => {
        console.log('adding task...');
    };

    return (
        <View style={styles.container}>
            <HeaderComponent />
            <AdComponent />
            <CalendarComponent />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        height: '98%'
    },
    containerGap: {
    }
});

export default HomeComponent;