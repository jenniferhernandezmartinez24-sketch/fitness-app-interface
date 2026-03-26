import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BottomNavigation = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#fff' }}>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;