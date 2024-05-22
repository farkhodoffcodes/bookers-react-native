import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import ModalButton from '../(buttons)/modal-btn';

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

const OtpInput = () => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (text: any) => {
        setOtp(text);
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
                    <ModalButton backgroundColor='#9c0935' textColor='white' title="Submit" onPress={() => alert('OTP Submitted!')} />
                </View>
            )}
        </View>
    );
}

export default OtpInput;
