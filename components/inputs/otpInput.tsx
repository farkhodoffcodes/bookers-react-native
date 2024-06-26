import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import ModalButton from '../(buttons)/modal-btn';
import { router } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'space-between',
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#4b4b64',
        borderBottomColor: '#4b4b64',
        color: '#fff',
        width: 70,
        height: 70,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
    },
});

const OtpInput = ({ onOtpComplete }:any) => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (text:any) => {
        setOtp(text);
        if (text.length === 4) {
            onOtpComplete(text);
        }
    };

    return (
        <View style={styles.container}>
            <OTPTextInput
                textInputStyle={styles.roundedTextInput}
                handleTextChange={handleOtpChange}
                defaultValue={otp}
            />
            {otp.length === 4 && (
                <View style={styles.buttonContainer}>
                    <ModalButton backgroundColor='#9c0935' textColor='white' title="Submit" onPress={() => {
                        alert('message Submitted!')
                        router.push('/card_page')
                    }} />
                </View>
            )}
        </View>
    );
}

export default OtpInput;
