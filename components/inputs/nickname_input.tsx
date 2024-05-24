import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  valLength?: number;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, valLength = 4 }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isValidFocus, setIsValidFocus] = useState(false);
  const isValid = inputValue.length >= valLength;

  return (
    <>
      <TextInput
        className={`w-full h-14 bg-[#444] text-[#fff] px-4 rounded-xl`}
        style={{ borderColor: isFocused ? '#fff' : isValidFocus && !isValid ? '#ff0000' : 'gray', borderWidth: 1 }}
        placeholder={placeholder}
        placeholderTextColor={isValidFocus && !isValid ? '#ff0000' : 'gray'}
        value={inputValue}
        onChangeText={setInputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
          setIsValidFocus(true)
        }}
      />
      {isValidFocus && !isValid && (
        <Text className='text-[#ff0000] text-sm mt-2 text-start'>
          нужно как минимум {valLength} символа в {placeholder}
        </Text>
      )}
    </>
  );
};

export default CustomInput;
