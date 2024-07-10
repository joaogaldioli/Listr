import HeaderComponent from './header/HeaderComponent';
import AdComponent from './ad/AdComponent';
import CalendarComponent from './calendar/CalendarComponent';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HomeComponent = ({ navigation }) => {

    openSettings = () => {
        console.log('Settings button clicked.');
    };

    openModules = () => {
        console.log('Modules button clicked.');
    };

    addTask = () => {
        console.log('adding task...');
        navigation.navigate('AddTask');
    };

    return (
        <View style={styles.container}>
            <HeaderComponent />
            <AdComponent />
            <CalendarComponent />
            <TouchableOpacity
                style={styles.addTaskBtn}
                onPress={() => addTask()}
            >
                <FontAwesomeIcon name="plus" icon={faPlus} size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        height: '98%'
    },
    addTaskBtn: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeComponent;
