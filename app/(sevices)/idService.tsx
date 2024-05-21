import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '@/app/(navigation)/navbar';
import tw from 'tailwind-react-native-classnames';

const services = [
  { label: 'Service 1', value: 'service1' },
  { label: 'Service 2', value: 'service2' },
  { label: 'Service 3', value: 'service3' },
];

const IdService = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  selectedText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
});

export default IdService;
