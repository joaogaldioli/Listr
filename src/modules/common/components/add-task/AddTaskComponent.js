import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddTaskComponent = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Task:', task);
        // Reset the form
        setTask('');
    };

    return (
        <View>
            <Text>Add Task</Text>
            <TextInput
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <Button
                title="Add"
                onPress={handleSubmit}
            />
        </View>
    );
};

export default AddTaskComponent;