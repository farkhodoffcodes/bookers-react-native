import CenteredModal from "@/components/(modals)/centeredModal";
import NotificationCard from "@/components/cards/notification_card";
import NotificationNav from "@/components/navigation/notification_nav";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import ModalComponent from "@/components/(modals)/bottom-modal";
import ModalButton from "@/components/(buttons)/modal-btn";

interface NotificationData {
    id: number;
    date: string;
    description: string;
    iconJsxElement: JSX.Element;
    title: string;
}

interface NotificationItemData {
    title: string;
    description: string;
    date: string;
}

const data: NotificationData[] = [
    {
        id: 1,
        date: 'nima se',
        description: 'portal de portal de portal de portal de portal de portal de portal de portal',
        iconJsxElement: <></>,
        title: 'dj Portal de portal de portal'
    },
    {
        id: 2,
        date: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 3,
        date: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 4,
        date: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 5,
        date: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 6,
        date: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    }
]

export default function Notifaction() {
    const navigation = useNavigation()
    const [isModal, setIsModal] = useState<boolean>(false)
    const [isBottomModal, setIsBottomModal] = useState<boolean>(false)
    const [notificationCardData, setNotificationCardData] = useState<NotificationItemData>({ title: '', date: '', description: '' })

    const toggleModal = () => setIsModal(!isModal)
    const toggleBottomModal = () => setIsBottomModal(!isBottomModal)
    console.log(notificationCardData);

    return (
        <View className="bg-[#1E1E1E] flex-1 px-3">
            <SafeAreaView>
                {/* navigation menu */}
                <NotificationNav
                    name="Уведомления"
                    deleteIcon={true}
                    backIcon={() => navigation.goBack()}
                    toggleModal={toggleModal}
                />
            </SafeAreaView>

            {/* natification body qism */}
            {data.length > 0 ?
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginVertical: 30, paddingBottom: 40 }}
                >
                    {data.map(item => (
                        <NotificationCard
                            key={item.id}
                            date={item.date}
                            description={item.description}
                            iconJsxElement={item.iconJsxElement}
                            title={item.title}
                            setData={setNotificationCardData}
                            onPress={toggleBottomModal}
                        />
                    ))}
                </ScrollView>
                : <View className="flex-1 justify-center items-center">
                    <Text className="text-white text-xl">Bildirishnomalar mavjud emas!!!</Text>
                </View>
            }

            {/* notification delete modal */}
            <CenteredModal
                btnRed="Yes"
                btnWhite="Close"
                children={
                    <View className="items-center justify-center">
                        <MaterialIcons name="delete" size={120} color="#9C0A35" />
                        <Text className="text-white text-xl mt-1 opacity-80">delete</Text>
                    </View>
                }
                isFullBtn={true}
                isModal={isModal}
                toggleModal={toggleModal}
            />

            {/* notification info modal */}
            <ModalComponent
                children={
                    <View className="flex-col w-full">
                        {notificationCardData && (
                            <>
                                <Text className="text-white text-xl font-bold mb-2">{notificationCardData.title}</Text>
                                <View className="items-start">
                                    <Text className="text-[#828282] border-2 border-[#828282] px-3 py-1 rounded-lg mb-7">
                                        {notificationCardData.date}
                                    </Text>
                                </View>
                                <Text className="text-white text-base leading-5 mb-4">
                                    {notificationCardData.description}
                                </Text>
                                <ModalButton
                                    textColor="white"
                                    title="Перейти к заявке"
                                    backgroundColor="#9C0A35"
                                />
                            </>
                        )}
                    </View>}
                isBottomModal={isBottomModal}
                toggleBottomModal={toggleBottomModal}
            />
        </View>
    )
}