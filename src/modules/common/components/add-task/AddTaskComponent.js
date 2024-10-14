import { set } from 'date-fns';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FrequencyEnum } from '../../models/TaskEnums';

const AddTaskComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: '',
        frequency: '',
        time: '',
        group: ''
    });

    const [currentPage, setCurrentPage] = useState(1);

    const goToPage1 = () => setCurrentPage(1);
    const goToPage2 = () => setCurrentPage(2);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    let frequencyContent;

    switch (formData.frequency) {
      case FrequencyEnum.Singular:
        frequencyContent = (
          <View>
            <Text>Enter day and time:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
        );
        break;
      case FrequencyEnum.Daily:
        frequencyContent = (
          <View>
            <Text>Enter time:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
        );
        break;
      case FrequencyEnum.Weekly:
        frequencyContent = (
          <View>
            <Text>Enter day:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
        );
        break;
      case FrequencyEnum.Monthly:
        frequencyContent = (
          <View>
            <Text>Enter day:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
          
        );
        break;
      case FrequencyEnum.Yearly:
        frequencyContent = (
          <View>
            <Text>Enter day:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
        );
        break;
      case FrequencyEnum.Custom:
        frequencyContent = (
          <View>
            <Text>Enter day:</Text>
            <TextInput
              value={formData.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </View>
        );
        break;
    }

    const validate = () => {
      let valid = true;
      let errors = {};

      if (!formData.name) {
        valid = false;
        errors.name = 'Name is required';
      }

      if (!formData.frequency) {
        valid = false;
        errors.frequency = 'Frequency is required';
      }
    };



    return (
        <View style={styles.container}>
          {currentPage === 1 ? (
            <View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                  style={styles.input}
                  value={formData.name}
                  onChangeText={(value) => handleChange('name', value)}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                  style={styles.input}
                  value={formData.description}
                  onChangeText={(value) => handleChange('description', value)}
                  keyboardType="default"
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Type:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={formData.type}
                  onChangeText={(value) => handleChange('type', value)}
                  multiline
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Frequency:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={formData.frequency}
                  onChangeText={(value) => handleChange('frequency', value)}
                  multiline
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={goToPage1}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {frequencyContent}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Group:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={formData.group}
                  onChangeText={(value) => handleChange('group', value)}
                  multiline
                />
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={goToPage2}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    formGroup: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default AddTaskComponent;