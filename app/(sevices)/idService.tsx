import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Collapsible from "react-native-collapsible";
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";
import Navbar from "@/app/(navigation)/navbar";
import tw from "tailwind-react-native-classnames";
import { RadioButton } from 'react-native-paper';

const MasterButton: React.FC = () => {
	const [collapsedNearby, setCollapsedNearby] = useState<boolean>(true);
	const [collapsedGender, setCollapsedGender] = useState<boolean>(true);
	const [collapsedPrice, setCollapsedPrice] = useState<boolean>(true);
	const [sliderValue, setSliderValue] = useState<number>(1.5);
	const [priceValue, setPriceValue] = useState<number>(100);
	const [isCheckedNearby, setCheckedNearby] = useState<boolean>(false);
	const [isCheckedNotImportant, setCheckedNotImportant] = useState<boolean>(false);
	const [isCheckedHairCare, setCheckedHairCare] = useState<boolean>(false);
	const [isCheckedHairExtension, setCheckedHairExtension] = useState<boolean>(false);
	const [isCheckedPriceNotImportant, setCheckedPriceNotImportant] = useState<boolean>(false);
	const [checked, setCheckedRadio] = useState<string>('male');

	const toggleCollapsedNearby = () => {
		setCollapsedNearby(!collapsedNearby);
	};

	const toggleCollapsedGender = () => {
		setCollapsedGender(!collapsedGender);
	};

	const toggleCollapsedPrice = () => {
		setCollapsedPrice(!collapsedPrice);
	};

	const handleCheckboxChange = (
		setChecked: React.Dispatch<React.SetStateAction<boolean>>,
		setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
		collapsed: boolean
	) => {
		setChecked(prev => {
			const newValue = !prev;
			if (newValue) {
				setCollapsed(true);
			}
			return newValue;
		});
	};

	return (
		<View style={tw`bg-gray-900 py-5 h-full`}>
			<Navbar name="Здоровье и красота волос" centerName={true} back={true} icons={false} />

			{/* Hair Care Checkbox */}
			<View style={tw`flex-row items-center bg-gray-300 px-5 py-2 rounded-lg mx-3 my-2 shadow-md`}>
				<Checkbox
					value={isCheckedHairCare}
					onValueChange={setCheckedHairCare}
					color={isCheckedHairCare ? "#800000" : undefined}
					style={tw`mr-2`}
				/>
				<Text style={tw`text-lg text-black`}>Уход за волосами</Text>
			</View>

			{/* Hair Extension Checkbox */}
			<View style={tw`flex-row items-center bg-gray-300 px-5 py-2 rounded-lg mx-3 my-2 shadow-md`}>
				<Checkbox
					value={isCheckedHairExtension}
					onValueChange={setCheckedHairExtension}
					color={isCheckedHairExtension ? "#800000" : undefined}
					style={tw`mr-2`}
				/>
				<Text style={tw`text-lg text-black`}>Наращивание волос</Text>
			</View>

			{/* Nearby Collapsible */}
			<TouchableOpacity style={tw`flex-row justify-between items-center bg-gray-300 px-5 py-2 rounded-lg mx-3 my-2 shadow-md`} onPress={toggleCollapsedNearby}>
				<Text style={tw`text-lg font-bold text-black`}>Рядом со мной</Text>
				{collapsedNearby ? (
					<AntDesign name="right" size={24} color="black" />
				) : (
					<AntDesign name="down" size={24} color="black" />
				)}
			</TouchableOpacity>
			<Collapsible collapsed={collapsedNearby} align="center">
				<View style={tw`bg-gray-200 p-4 rounded-lg w-11/12 self-center`}>
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
					<View style={tw`flex-row items-center`}>
						<Checkbox
							style={tw`mr-2`}
							value={isCheckedNearby}
							onValueChange={() => handleCheckboxChange(setCheckedNearby, setCollapsedNearby, collapsedNearby)}
							color={isCheckedNearby ? "#800000" : undefined}
						/>
						<Text style={tw`text-lg text-black`}>не важно</Text>
					</View>
				</View>
			</Collapsible>

			{/* Gender Collapsible */}
			<TouchableOpacity style={tw`flex-row justify-between items-center bg-gray-300 px-5 py-2 rounded-lg mx-3 my-2 shadow-md`} onPress={toggleCollapsedGender}>
				<Text style={tw`text-lg font-bold text-black`}>Пол мастера</Text>
				{collapsedGender ? (
					<AntDesign name="right" size={24} color="black" />
				) : (
					<AntDesign name="down" size={24} color="black" />
				)}
			</TouchableOpacity>
			<Collapsible collapsed={collapsedGender} align="center">
				<View style={tw`bg-gray-200 p-4 rounded-lg w-11/12 self-center`}>
					<View style={tw`flex-row items-center mb-3`}>
						<RadioButton
							value="male"
							status={checked === "male" ? "checked" : "unchecked"}
							onPress={() => setCheckedRadio("male")}
							color="#800000"
							disabled={isCheckedNotImportant}
						/>
						<Text style={tw`text-lg text-black`}>Мужчины</Text>
					</View>
					<View style={tw`flex-row items-center mb-3`}>
						<RadioButton
							value="female"
							status={checked === "female" ? "checked" : "unchecked"}
							onPress={() => setCheckedRadio("female")}
							color="#800000"
							disabled={isCheckedNotImportant}
						/>
						<Text style={tw`text-lg text-black`}>Женщины</Text>
					</View>
					<View style={tw`flex-row items-center`}>
						<Checkbox
							value={isCheckedNotImportant}
							onValueChange={() => handleCheckboxChange(setCheckedNotImportant, setCollapsedGender, collapsedGender)}
							color={isCheckedNotImportant ? "#800000" : undefined}
							style={tw`mr-2`}
						/>
						<Text style={tw`text-lg text-black`}>не важно</Text>
					</View>
				</View>
			</Collapsible>

			{/* Price Collapsible */}
			<TouchableOpacity style={tw`flex-row justify-between items-center bg-gray-300 px-5 py-2 rounded-lg mx-3 my-2 shadow-md`} onPress={toggleCollapsedPrice}>
				<Text style={tw`text-lg font-bold text-black`}>Цена</Text>
				{collapsedPrice ? (
					<AntDesign name="right" size={24} color="black" />
				) : (
					<AntDesign name="down" size={24} color="black" />
				)}
			</TouchableOpacity>
			<Collapsible collapsed={collapsedPrice} align="center">
				<View style={tw`bg-gray-200 p-4 rounded-lg w-11/12 self-center`}>
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
					<View style={tw`flex-row items-center`}>
						<Checkbox
							style={tw`mr-2`}
							value={isCheckedPriceNotImportant}
							onValueChange={() => handleCheckboxChange(setCheckedPriceNotImportant, setCollapsedPrice, collapsedPrice)}
							color={isCheckedPriceNotImportant ? "#800000" : undefined}
						/>
						<Text style={tw`text-lg text-black`}>не важно</Text>
					</View>
				</View>
			</Collapsible>
		</View>
	);
};

export default MasterButton;
