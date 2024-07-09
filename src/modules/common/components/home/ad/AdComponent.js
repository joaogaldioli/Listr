import React from 'react';
import { View, Text } from 'react-native';

const AdComponent = () => {
  return (
    <View style={{ flex: 0.1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ flex: 1, backgroundColor: 'white' , width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center' }}>ads</Text>
        </View>
    </View>
  );
};

export default AdComponent;
