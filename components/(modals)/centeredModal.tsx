import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import ModalButton from "@/components/(buttons)/modal-btn";

const { width, height } = Dimensions.get('window')

interface ModalProps {
    children: JSX.Element; //modal body qismi
    btnWhite: string; // oq btn uchun text
    btnRed: string; // qizil btn uchun text
    isFullBtn: boolean; // btn lar row yoki col joylashishi uchun trueOrfalse
    isModal: boolean // modal ochish uchin state uzgaruvchi
    toggleModal: () => void // modalni ochib yopish uchun function m: => const toggleModal = () => setIsModal(!isModal);
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
                    <View className={`${isFullBtn ? 'flex-row' : 'flex-col'} w-full mt-10`}>
                        <View className={isFullBtn ? 'w-[48%]' : 'my-2'}>
                            <ModalButton
                                backgroundColor={'white'}
                                title={btnWhite}
                                textColor={'#9C0A35'}
                                onPress={toggleModal} // vazifa bajarilishiga qarab click uchun props
                            />
                        </View>
                        <View className={isFullBtn ? 'w-[48%] mx-3' : 'my-2'}>
                            <ModalButton
                                backgroundColor={'#9C0A35'}
                                title={btnRed}
                                textColor={'white'}
                                onPress={toggleModal} // vazifa bajarilishiga qarab click uchun props
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
