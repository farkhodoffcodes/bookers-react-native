import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';
import Navbar from '../(navigation)/navbar';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberInput: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const isButtonDisabled = phoneNumber.length !== 9;

  return (
    <View style={styles.container}>
      <View className='bg-[#1E1E1E] '>
        <View className='mt-5'>
          <Navbar name="" back={true} icons={false} centerName={false} />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <View className='items-center mb-5'>
          <Text className='text-white text-lg mb-3'>Ваш номер телефона</Text>
          <Text className='text-[#4F4F4F] text-center'>Мы отправили вам SMS с кодом подтверждения.</Text>
        </View>
        <StatusBar barStyle="dark-content" />
        <View style={styles.phoneNumber}>
          <SafeAreaView >

            <PhoneInput
              className=''
              ref={phoneInput}
              defaultValue={value}
              defaultCode="UZ"
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
                setCountryCode(phoneInput.current?.getCountryCode() || '');
                setValid(phoneInput.current?.isValidNumber(text) || false);
              }}
              countryPickerProps={{ withAlphaFilter: true }}
              disabled={disabled}
              withDarkTheme
              withShadow
              autoFocus
              // placeholder="Номер телефона"
              onChangeText={handlePhoneNumberChange}
              value={phoneNumber}
            />
          </SafeAreaView>
        </View>
        <Button
          className='py-3 rounded-2xl'
          title="Войти"
          onPress={() => console.log('Button Pressed')}
          disabled={isButtonDisabled}
          color={isButtonDisabled ? 'grey' : '#9C0A35'}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  phoneNumber: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default PhoneNumberInput;
