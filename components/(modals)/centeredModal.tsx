import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from "@/components/(buttons)";

const {width, height} = Dimensions.get('window')

interface ModalProps {
    children: JSX.Element;
    btnWhite: string;
    btnRed: string;
    isFullBtn: boolean;
    isModal: boolean
    toggleModal: () => void
}

const CenteredModal: React.FC<ModalProps> = (props) => {
    const {
        children,
        btnWhite,
        btnRed,
        isFullBtn,
        isModal,
        toggleModal,
    } = props

    return (
        <View style={styles.container}>
            <Modal
                isVisible={isModal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropColor="black"
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
                coverScreen={true}
                deviceHeight={height}
                deviceWidth={width}
                hasBackdrop={true}
                hideModalContentWhileAnimating={true}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
                useNativeDriver={true}>
                <View style={styles.modalView}>
                    {children}
                    <View className={`${isFullBtn ? 'flex-row' : 'flex-col'} w-full`}>
                        <View className={isFullBtn ? 'w-[48%]' : 'my-2'}>
                            <CustomButton
                                backgroundColor={'white'}
                                title={`Yes`}
                                textColor={'#9C0A35'}
                            />
                        </View>
                        <View className={isFullBtn ? 'w-[48%] mx-3' : 'my-2'}>
                            <CustomButton
                                backgroundColor={'#9C0A35'}
                                title={`Yes`}
                                textColor={'white'}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#21212E',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
    }
});

export default CenteredModal;
