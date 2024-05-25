import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ModalButton from '@/components/(buttons)/modal-btn';
import { router } from 'expo-router';

const createAccPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' source={require('../../assets/images/logo.png')} />
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'white', marginTop: 15, marginBottom: 80 }}>Bookers Beauty</Text>
            </View>
            <View style={{ width: '90%' }}>
                <View style={{ marginTop: 10 }}>
                    <ModalButton onPress={() => router.push('/numberCreate')} title='Начать' textColor='white' backgroundColor='#9C0A35' />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity
                    onPress={()=>router.push("/(tabs)/")}
                        className='w-full py-3 rounded-2xl border-[2px] border-solid border-[#828282]'
                    >
                        <Text className='text-center text-[#9C0A35] text-[18px]'>Войти через Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity
                        className='w-full py-3 rounded-2xl border-[2px] border-solid border-[#828282]'
                    >
                        <Text className='text-center text-[#9C0A35] text-[18px]'>Войти через Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default createAccPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})