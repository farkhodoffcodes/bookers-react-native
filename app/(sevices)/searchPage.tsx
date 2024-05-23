import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Modal,
	ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "./../(navigation)/navbar";
import tw from "tailwind-react-native-classnames";
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";
import { RadioButton } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MasterCard from "@/components/cards/aboutMaster";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";

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
	const [activeCollapse, setActiveCollapse] = useState<string | null>(null);
	const [checked, setCheckedRadio] = useState<string>("male");
	const [sliderValue, setSliderValue] = useState<number>(1.5);
	const [priceValue, setPriceValue] = useState<number>(100);
	const [ratingValue, setRatingValue] = useState<number>(3);
	const [isCheckedNearby, setCheckedNearby] = useState<boolean>(false);
	const [isCheckedPriceNotImportant, setCheckedPriceNotImportant] = useState<boolean>(false);
	const [isCheckedCalendarNotImportant, setCheckedCalendarNotImportant] = useState<boolean>(false);
	const [isCheckedRatingNotImportant, setCheckedRatingNotImportant] = useState<boolean>(false);
	const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const toggleCollapse = (section: string) => {
		setActiveCollapse((prev) => (prev === section ? null : section));
	};

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: Date) => {
		setSelectedDate(date);
		hideDatePicker();
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000); // 2 soniyadan keyin loader yo'qoladi
	}, []);

	return (
		<View style={tw`h-full bg-gray-900 py-5`}>
			<Navbar name="Здоровье и красота волос" icons={false} centerName={true} back={true} />
			<View style={tw`p-5`}>
				{/* Filter button and checkbox text */}
				<View style={tw`flex-row items-center justify-between mb-5`}>
					<TouchableOpacity
						style={tw`bg-red-800 p-3 rounded-lg`}
						onPress={() => setFilterVisible(true)}
					>
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
					<ScrollView style={tw`mb-52`}>
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
					<ScrollView contentContainerStyle={tw`flex-1 justify-end`}>
						<View style={tw`bg-gray-800 p-5 rounded-t-lg`}>
							<Text style={tw`text-white text-xl font-bold mb-5`}>Фильтр</Text>
							<TouchableOpacity
								style={tw`bg-gray-300 p-3 rounded-lg mb-3 flex-row justify-between items-center`}
								onPress={() => toggleCollapse("gender")}
							>
								<Text style={tw`text-black font-bold text-lg`}>Пол мастера</Text>
								{activeCollapse === "gender" ? (
									<AntDesign name="down" size={24} color="black" />
								) : (
									<AntDesign name="right" size={24} color="black" />
								)}
							</TouchableOpacity>

							<Collapsible collapsed={activeCollapse !== "gender"} align="center">
								<View style={tw`bg-gray-300 p-4 rounded-lg mb-3`}>
									<View style={tw`flex-row items-center mb-3`}>
										<RadioButton
											value="male"
											status={checked === "male" ? "checked" : "unchecked"}
											onPress={() => setCheckedRadio("male")}
											color="#800000"
										/>
										<Text style={tw`text-black font-bold text-lg`}>Мужчины</Text>
									</View>
									<View style={tw`flex-row items-center mb-3`}>
										<RadioButton
											value="female"
											status={checked === "female" ? "checked" : "unchecked"}
											onPress={() => setCheckedRadio("female")}
											color="#800000"
										/>
										<Text style={tw`text-black font-bold text-lg`}>Женщины</Text>
									</View>
								</View>
							</Collapsible>

							<TouchableOpacity
								style={tw`bg-gray-300 p-3 rounded-lg mb-3 flex-row justify-between items-center`}
								onPress={() => toggleCollapse("nearby")}
							>
								<Text style={tw`text-black font-bold  text-lg`}>Рядом со мной</Text>
								{activeCollapse === "nearby" ? (
									<AntDesign name="down" size={24} color="black" />
								) : (
									<AntDesign name="right" size={24} color="black" />
								)}
							</TouchableOpacity>
							<Collapsible collapsed={activeCollapse !== "nearby"} align="center">
								<View style={tw`bg-gray-300 p-4 rounded-lg mb-3`}>
									<View style={tw`mb-5`}>
										<Text style={tw`text-lg text-red-800 mb-2`}>{sliderValue} км</Text>
										<Slider
											style={tw`w-full h-10`}
											minimumValue={0}
											maximumValue={10}
											step={0.5}
											value={sliderValue}
											onValueChange={(value) => setSliderValue(value)}
											minimumTrackTintColor="#800000"
											maximumTrackTintColor="#000000"
											thumbTintColor="#800000"
											disabled={isCheckedNearby}
										/>
									</View>
								</View>
							</Collapsible>

							<TouchableOpacity
								style={tw`bg-gray-300 p-3 rounded-lg mb-3 flex-row justify-between items-center`}
								onPress={() => toggleCollapse("price")}
							>
								<Text style={tw`text-black font-bold text-lg`}>Цена не более</Text>
								{activeCollapse === "price" ? (
									<AntDesign name="down" size={24} color="black" />
								) : (
									<AntDesign name="right" size={24} color="black" />
								)}
							</TouchableOpacity>
							<Collapsible collapsed={activeCollapse !== "price"} align="center">
								<View style={tw`bg-gray-300 p-4 rounded-lg mb-3`}>
									<View style={tw`mb-5`}>
										<Text style={tw`text-lg text-red-800 mb-2`}>{priceValue} $</Text>
										<Slider
											style={tw`w-full h-10`}
											minimumValue={0}
											maximumValue={500}
											step={10}
											value={priceValue}
											onValueChange={(value) => setPriceValue(value)}
											minimumTrackTintColor="#800000"
											maximumTrackTintColor="#000000"
											thumbTintColor="#800000"
											disabled={isCheckedPriceNotImportant}
										/>
									</View>
								</View>
							</Collapsible>

							<TouchableOpacity
								style={tw`bg-gray-300 p-3 rounded-lg mb-3 flex-row justify-between items-center`}
								onPress={() => toggleCollapse("rating")}
							>
								<Text style={tw`text-black font-bold text-lg`}>Рейтинг</Text>
								{activeCollapse === "rating" ? (
									<AntDesign name="down" size={24} color="black" />
								) : (
									<AntDesign name="right" size={24} color="black" />
								)}
							</TouchableOpacity>
							<Collapsible collapsed={activeCollapse !== "rating"} align="center">
								<View style={tw`bg-gray-300 p-4 rounded-lg mb-3`}>
									<View style={tw`mb-5`}>
										<Text style={tw`text-lg text-red-800 mb-2`}>{ratingValue}+</Text>
										<Slider
											style={tw`w-full h-10`}
											minimumValue={0}
											maximumValue={5}
											step={1}
											value={ratingValue}
											onValueChange={(value) => setRatingValue(value)}
											minimumTrackTintColor="#800000"
											maximumTrackTintColor="#000000"
											thumbTintColor="#800000"
											disabled={isCheckedRatingNotImportant}
										/>
									</View>
								</View>
							</Collapsible>

							<TouchableOpacity
								style={tw`bg-gray-300 p-3 rounded-lg mb-3 flex-row justify-between items-center`}
								onPress={() => toggleCollapse("calendar")}
							>
								<Text style={tw`text-black font-bold text-lg`}>Дата записи</Text>
								{activeCollapse === "calendar" ? (
									<AntDesign name="down" size={24} color="black" />
								) : (
									<AntDesign name="right" size={24} color="black" />
								)}
							</TouchableOpacity>
							<Collapsible collapsed={activeCollapse !== "calendar"} align="center">
								<View style={tw`bg-gray-700 p-4 rounded-lg mb-3`}>
									<TouchableOpacity
										onPress={showDatePicker}
										style={tw`bg-white p-4 rounded-lg`}
										disabled={isCheckedCalendarNotImportant}
									>
										<Text style={tw`text-lg text-black`}>
											{selectedDate ? selectedDate.toLocaleDateString() : "Выберите дату"}
										</Text>
									</TouchableOpacity>
								</View>
							</Collapsible>

							<DateTimePickerModal
								isVisible={isDatePickerVisible}
								mode="date"
								onConfirm={handleConfirm}
								onCancel={hideDatePicker}
							/>

							<TouchableOpacity
								style={tw`bg-red-800 p-4 rounded-lg items-center`}
								onPress={() => setFilterVisible(false)}
							>
								<Text style={tw`text-white text-lg`}>Filter</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</Modal>
			</View>
		</View>
	);
};

export default SearchPage;
