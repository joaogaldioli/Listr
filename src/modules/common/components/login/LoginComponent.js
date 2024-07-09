import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const LoginComponent = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: add login logic here
        console.log('logging in with: ', {username, password});
        navigation.navigate('Home');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
            <TextInput style={styles.input} placeholder='Username' onChangeText={(text) => setUsername(text)} />
            <TextInput style={styles.input} placeholder='Password' onChangeText={(text) => setPassword(text)} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 16,
      },
      input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
      },
});

export default LoginComponent;