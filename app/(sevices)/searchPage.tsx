import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "./../(navigation)/navbar";
import tw from "tailwind-react-native-classnames";
import Checkbox from "expo-checkbox";
import MasterCard from "@/components/cards/aboutMaster";

// MasterCard uchun rekvizitlarni aniqlaymiz
const masterData = [
	{
		name: "Master 1",
		alias: "Alias 1",
		rating: 4,
		location: "Location 1",
		nextAppointment: "2024-05-01",
		orders: 120,
		clients: 110,
		imageUrl: "https://via.placeholder.com/50",
	},
	{
		name: "Master 2",
		alias: "Alias 2",
		rating: 5,
		location: "Location 2",
		nextAppointment: "2024-05-02",
		orders: 130,
		clients: 120,
		imageUrl: "https://via.placeholder.com/50",
	},
	{
		name: "Master 3",
		alias: "Alias 3",
		rating: 3,
		location: "Location 3",
		nextAppointment: "2024-05-03",
		orders: 140,
		clients: 130,
		imageUrl: "https://via.placeholder.com/50",
	},
	{
		name: "Master 4",
		alias: "Alias 4",
		rating: 4,
		location: "Location 4",
		nextAppointment: "2024-05-04",
		orders: 150,
		clients: 140,
		imageUrl: "https://via.placeholder.com/50",
	},
	{
		name: "Master 5",
		alias: "Alias 5",
		rating: 5,
		location: "Location 5",
		nextAppointment: "2024-05-05",
		orders: 160,
		clients: 150,
		imageUrl: "https://via.placeholder.com/50",
	},
];

const SearchPage = () => {
	const [isChecked, setChecked] = useState(false);
	const [loading, setLoading] = useState(true);
	const [filterVisible, setFilterVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000); // 2 soniyadan keyin loader yo'qoladi
	}, []);

	return (
		<View style={tw`h-full bg-gray-900`}>
			<Navbar name="Здоровье и красота волос" icons={false} centerName={true} back={true} />
			<View style={tw`p-5`}>
				{/* Filter button and checkbox text */}
				<View style={tw`flex-row items-center justify-between mb-5`}>
					<TouchableOpacity style={tw`bg-red-800 p-3 rounded-lg`} onPress={() => setFilterVisible(true)}>
						<Text style={tw`text-white text-lg`}>Фильтр</Text>
					</TouchableOpacity>
					<View style={tw`flex-row items-center`}>
						<Checkbox
							value={isChecked}
							onValueChange={setChecked}
							color={isChecked ? "#800000" : undefined}
							style={tw`mr-2`}
						/>
						<Text style={tw`text-lg text-white`}>Запись на сегодня</Text>
					</View>
				</View>

				{/* Search input */}
				<View style={tw`bg-gray-300 p-3 rounded-lg mb-5`}>
					<TextInput
						style={tw`text-lg text-black`}
						placeholder="Поиск..."
						placeholderTextColor="#888"
					/>
				</View>

				{/* Master cards */}
				{loading ? (
					<ActivityIndicator size="large" color="#800000" />
				) : (
					<ScrollView style={tw`h-4/6`}>
						{masterData.map((master, index) => (
							<MasterCard
								key={index}
								name={master.name}
								alias={master.alias}
								rating={master.rating}
								location={master.location}
								nextAppointment={master.nextAppointment}
								orders={master.orders}
								clients={master.clients}
								imageUrl={master.imageUrl}
							/>
						))}
					</ScrollView>
				)}

				{/* Filter modal */}
				<Modal visible={filterVisible} animationType="slide" transparent={true}>
					<View style={tw`flex-1 justify-end`}>
						<View style={tw`bg-gray-800 p-5 rounded-t-lg`}>
							<Text style={tw`text-white text-xl font-bold mb-5`}>Фильтр</Text>
							<TouchableOpacity style={tw`bg-gray-600 p-3 rounded-lg mb-3`}>
								<Text style={tw`text-white text-lg`}>Пол мастера</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`bg-gray-600 p-3 rounded-lg mb-3`}>
								<Text style={tw`text-white text-lg`}>Рядом со мной</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`bg-gray-600 p-3 rounded-lg mb-3`}>
								<Text style={tw`text-white text-lg`}>Цена не более</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`bg-gray-600 p-3 rounded-lg mb-3`}>
								<Text style={tw`text-white text-lg`}>Рейтинг</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`bg-gray-600 p-3 rounded-lg mb-5`}>
								<Text style={tw`text-white text-lg`}>Дата записи</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`bg-red-800 p-3 rounded-lg`} onPress={() => setFilterVisible(false)}>
								<Text style={tw`text-white text-lg text-center`}>Сохранить</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
};

export default SearchPage;
