import CenteredModal from "@/components/(modals)/centeredModal";
import NotificationCard from "@/components/cards/notification_card";
import NotificationNav from "@/components/navigation/notification_nav";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface NotificationData {
    id: number;
    data: string;
    description: string;
    iconJsxElement: JSX.Element;
    title: string;
}

const data: NotificationData[] = [
    {
        id: 1,
        data: 'nima se',
        description: 'portal de portal de portal de portal de portal de portal de portal de portal',
        iconJsxElement: <></>,
        title: 'dj Portal de portal de portal'
    },
    {
        id: 2,
        data: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 2,
        data: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 2,
        data: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 2,
        data: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
    {
        id: 2,
        data: 's Portal',
        description: 'asd portal de portal de portal de portal de portal de',
        iconJsxElement: <></>,
        title: 'ew Portal de'
    },
]

export default function Notifaction() {
    const navigation = useNavigation()
    const [isModal, setIsModal] = useState(false)
    const toggleModal = () => setIsModal(!isModal)
    return (
        <View className="bg-[#1E1E1E] flex-1 px-3">
            <SafeAreaView>
                <NotificationNav
                    name="Уведомления"
                    deleteIcon={true}
                    backIcon={() => navigation.goBack()}
                    toggleModal={toggleModal}
                />
            </SafeAreaView>
            {data.length > 0 ?
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginVertical: 30, paddingBottom: 40 }}
                >
                    {data.map(item => (
                        <NotificationCard
                            key={item.id}
                            date={item.data}
                            description={item.description}
                            iconJsxElement={item.iconJsxElement}
                            title={item.title}
                        />
                    ))}
                </ScrollView>
                : <View className="flex-1 justify-center items-center">
                    <Text className="text-white text-xl">Bildirishnomalar mavjud emas!!!</Text>
                </View>
            }
            <CenteredModal
                btnRed="Yes"
                btnWhite="Close"
                children={
                    <View>
                        <Text>delete</Text>
                    </View>
                }
                isFullBtn={true}
                isModal={isModal}
                toggleModal={toggleModal}
            />
        </View>
    )
}