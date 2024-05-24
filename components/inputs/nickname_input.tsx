import React from 'react';
import { Text, TextInput } from 'react-native';
import useStore from '@/app/(state_managment)/zustand/(slice)/(profile)/necknameStore';

interface InputProps {
  placeholder: string;
  valLength?: number;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, valLength = 4 }) => {
  const { inputValue, isFocused, isValidFocus, setInputValue, setIsFocused, setIsValidFocus, } = useStore();
  const isValid = inputValue.length >= valLength;

  return (
    <>
      <TextInput
        className={`w-full h-14 bg-[#444] text-[#fff] px-4 rounded-xl`}
        style={{ borderColor: isFocused ? '#fff' : isValidFocus && !isValid ? '#ff0000' : 'gray', borderWidth: 1 }}
        placeholder={placeholder}
        placeholderTextColor={isValidFocus && !isValid ? '#ff0000' : 'gray'}
        // value={inputValue}
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
