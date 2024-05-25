import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import OtpInput from '@/components/inputs/otpInput';
import CustomCalendar from '@/components/(calendar)';

export default function CartVerify() {
    const handleOtpComplete = (otp: any) => {
        console.log('OTP is complete:', otp);
        // Shu yerda OTP to'liq bo'lganda amalga oshiradigan boshqa funksiyalarni yozishingiz mumkin.
    };
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
                    <OtpInput onOtpComplete={handleOtpComplete} />
                    <Text style={tw`text-gray-400 mb-10 text-sm text-center mt-5`}>отправить повторно через <Text>00 : 06</Text></Text>
                </View>
            </TouchableWithoutFeedback>
            {/* <CustomCalendar/> */}
        </KeyboardAvoidingView>
    );
}
