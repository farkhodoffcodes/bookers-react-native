import NotificationNav from '@/components/navigation/notification_nav';
import {useNavigation} from 'expo-router';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SimpleLineIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import tw from "tailwind-react-native-classnames";

const BtnServes = ({name}: { name: string }) => {
    return (
        <TouchableOpacity
            className='p-3 rounded-x border-[#828282]
    border-2 px-2 py-1 rounded-lg mr-2'
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}
const ScrollBtn = ({name}: { name: string }) => {
    return (
        <TouchableOpacity
            className='border-2 bg-slate-50  p-3 rounded-xl'
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

const btnData = [
    {
        id: 1,
        name: 'ScrollBtn'
    },
    {
        id: 2,
        name: 'ScrollBtn 2'
    },
    {
        id: 3,
        name: 'ScrollBtn 3'
    },
]
const btnServise = [
    {
        id: 1,
        name: 'Стрижка'
    },
    {
        id: 1,
        name: 'Стрижка'
    },
    {
        id: 1,
        name: 'Стрижка'
    }
]


const ServiceHistory = () => {
    const filters = [
        "Все",
        "Волосы",
        "Ресницы",
        "Ногти",
        "Макияж",
        "Кожа",
        "Массаж",
        "Маникюр",
        "Педикюр",
    ];
    const [selectedFilter, setSelectedFilter] = useState<string>("Все");
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    const [select, isSelect] = useState(false)

    const handleFilterPress = (filter: string) => {
        setLoading(true);
        setSelectedFilter(filter);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    return (
        <SafeAreaView className='mt-10 bg-black'>
            <NotificationNav name='Натали' backIcon={() => navigation.goBack()} deleteIcon={false}/>
            <ScrollView
                className='bg-gray-900 w-full min-h-screen p-3'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 60}}
            >
                <View className='p-4'>
                    <View className='bg-[#B9B9C9] p-4 rounded-xl'>
                        <View className='flex-row items-center justify-between'>
                            <Image
                                source={{uri: 'https://via.placeholder.com/55'}}
                                className='w-14 h-14 rounded-full'
                            />
                            <View className='ml-4'>
                                <View className='flex flex-row'>
                                    <Text className='text-lg  font-bold'>Натали</Text>
                                    <Text className='border rounded-xl p-2 ml-2 text-center'>Beauty Wave</Text>
                                </View>
                                <Text className='text-sm text-gray-500'>Женский мастер</Text>
                            </View>

                            <View className='flex flex-row'>
                                <TouchableOpacity className='ml-2'>
                                    <FontAwesome name="star" size={24} color="red"/>
                                </TouchableOpacity>
                                <TouchableOpacity className='ml-2'>
                                    <FontAwesome name="star" size={24} color="red"/>
                                </TouchableOpacity>
                                <TouchableOpacity className='ml-2'>
                                    <FontAwesome name="star" size={24} color="red"/>
                                </TouchableOpacity>
                                <TouchableOpacity className='ml-2'>
                                    <FontAwesome name="star" size={24} color="red"/>
                                </TouchableOpacity>
                                <TouchableOpacity className='ml-2'>
                                    <FontAwesome name="star" size={24} color="red"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className='flex-row mt-4 flex-wrap'>
                            <TouchableOpacity className=' px-4 py-2 rounded-lg border mr-2 mt-1'>
                                <Text className='text-[#828282]'>Укладка</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className=' px-4 py-2 rounded-lg border mr-2 mt-1'>
                                <Text className='text-[#828282]'>Укладка</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className=' px-4 py-2 rounded-lg border mr-2 mt-1'>
                                <Text className='text-[#828282]'>Укладка</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className=' px-4 py-2 rounded-lg border mr-2 mt-1'>
                                <Text className='text-[#828282]'>Укладка</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className='text-sm text-gray-500 mt-2'>
                            Мирабадский р-н, ул. Нурафшон, 32
                        </Text>
                        <View className='flex-row justify-evenly mt-4'>
                            <TouchableOpacity className='bg-[#9C0A35] p-4 rounded-full'>
                                <SimpleLineIcons name="location-pin" size={24} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-[#9C0A35] p-4 rounded-full'>
                                <Feather name="phone" size={24} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-[#9C0A35] p-4 rounded-full'>
                                <AntDesign name="save" size={24} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className='bg-[#9C0A35] mt-4 p-4 rounded-xl'>
                            <Text className='text-white text-center'>Написать сообщение</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text className='text-white text-xl mt-5 font-bold mb-4'>
                            Услуги Натали
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            {btnData.map(item => <ScrollBtn name={item.name} key={item.id}/>)}
                        </ScrollView>
                    </View>
                    <View className='bg-[#B9B9C9] rounded-xl mt-4 max-h-screen'>
                        <View className='flex flex-row p-3'>
                            <Text>Nimadir</Text>
                            <Text className='font-bold text-lg mr-2'>Женская для взрослых</Text>
                        </View>
                        <View className='flexm flex-row p-3 flex-wrap'>
                            {btnServise.map(item => <BtnServes name={item.name} key={item.id}/>)}
                            <Text className='text-end text-[#9C0A35] font-bold text-xl p-2'>350 000 сум</Text>
                        </View>
                        <View className='p-3 max-h-screen'>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, aperiam
                                cupiditate dolor doloremque dolores est eum fugit illum ipsum magni mollitia nobis quasi
                                quidem reprehenderit saepe totam voluptate. Consequuntur et recusandae voluptatem. Atque
                                doloribus ipsum minima mollitia quasi quisquam sit tempore totam voluptates. Aliquam
                                aspernatur blanditiis deleniti distinctio earum eius enim fugiat, fugit, harum illo
                                illum in incidunt iste laborum magnam molestiae mollitia nam neque nulla omnis placeat
                                praesentium provident quae quaerat quasi quod reiciendis rerum tenetur, ut voluptatum!
                                Aperiam explicabo maiores provident quam similique tenetur veritatis. Blanditiis
                                deserunt facilis labore laborum optio reprehenderit repudiandae sapiente soluta totam,
                                voluptates?</Text>

                            <Image
                                className='w-full p-3 max-h-screen rounded-lg mt-2'
                                 source={require('../../../../../assets/images/logo.png')}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 70,
    },
    filterButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#767678",
        marginHorizontal: 5,
        width: 100,
        color: "#828282",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedFilterButton: {
        backgroundColor: "#b9b9c9",
        color: "#000",
    },
    filterText: {
        fontSize: 14,
        color: "#767678",
    },
    selectedFilterText: {
        color: "#000",
        fontSize: 20,
        fontWeight: "400",
    },

});
export default ServiceHistory;