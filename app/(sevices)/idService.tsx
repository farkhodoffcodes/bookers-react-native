import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider, Picker, List } from '@ant-design/react-native';
import Navbar from '@/app/(navigation)/navbar';
import tw from 'tailwind-react-native-classnames';

const services = [
  { label: 'Service 1', value: 'service1' },
  { label: 'Service 2', value: 'service2' },
  { label: 'Service 3', value: 'service3' },
];

const IdService = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleChange = (value) => {
    setSelectedService(value);
  };

  return (
    <Provider>
      <View style={tw`bg-gray-900 flex-1`}>
        <Navbar name="Здоровье и красота волос" centerName={true} icons={false} back={true} />
        <View style={tw`p-4`}>
          <List>
            <Picker
              data={services}
              cols={1}
              value={selectedService}
              onChange={handleChange}
            >
              <List.Item arrow="horizontal">Select Service</List.Item>
            </Picker>
          </List>
          <Text style={styles.selectedText}>Selected Service: {selectedService}</Text>
        </View>
      </View>
    </Provider>
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
