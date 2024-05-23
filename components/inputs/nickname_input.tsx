import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const isValid = inputValue.length >= 4;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Придумайте свой</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: isFocused ? '#fff' : '#555', borderWidth: isValid ? 1 : 2, borderBottomColor: isValid ? '#fff' : '#ff0000' }
        ]}
        value={inputValue}
        onChangeText={setInputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isValid && (
        <Text style={styles.errorText}>нужно как минимум 4 символа в никнейме</Text>
      )}
      <Text style={styles.infoText}>Будем использовать вместо вашего имени</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    backgroundColor: '#444',
    color: '#fff',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  errorText: {
    color: '#ff0000',
    marginTop: 4,
  },
  infoText: {
    color: '#aaa',
    marginTop: 8,
  },
});

export default CustomInput;
