import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import OtpInput from '@/components/inputs/otpInput';

export default function CartVerify() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={tw`flex-1 bg-[#21212e] p-4`}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={tw`flex-1 items-center pt-20`}>
                    <Text style={tw`text-white mb-14 text-xl`}>Подтверждение номера</Text>
                    <Text style={tw`text-white mb-10 text-xl`}>+99 888 517 11 98</Text>
                    <Text style={tw`text-gray-400 mb-10 text-sm text-center px-10`}>Мы отправили вам SMS с кодом подтверждения.</Text>
                    <OtpInput />
                    <Text style={tw`text-gray-400 mb-10 text-sm text-center mt-5`}>отправить повторно через <Text>00 : 06</Text></Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
