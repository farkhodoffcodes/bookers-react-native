import React from "react";
import { View, ScrollView, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import Navbar from "@/app/(navigation)/navbar";
import ServiceCard from "./../../components/cards/servicesMenu";
import { router } from "expo-router";

const services = [
	{
		id: 1,
		imageUrl: "https://fakeimg.pl/350x200/ff0000,128/000,255",
		title: "Здоровье и красота волос",
		subtitle: "Рядом с тобой 450",
		onPress: () => router.push("/idService"),
	},
	{
		id: 2,
		imageUrl: "https://fakeimg.pl/350x200/ff0000,128/000,255",
		title: "Ногтевой сервис",
		subtitle: "Рядом с тобой 75",
		onPress: () => router.push("/idService"),
	},
	{
		id: 3,
		imageUrl: "https://fakeimg.pl/350x200/ff0000,128/000,255",
		title: "Ресницы и брови",
		subtitle: "Рядом с тобой 322",
		onPress: () => router.push("/idService"),
	},
	{
		id: 4,
		imageUrl: "https://fakeimg.pl/350x200/ff0000,128/000,255",
		title: "Уход за телом",
		subtitle: "Рядом с тобой 456",
		onPress: () => router.push("/idService"),
	},
	{
		id: 5,
		imageUrl: "https://fakeimg.pl/350x200/ff0000,128/000,255",
		title: "Уход за лицом",
		subtitle: "Рядом с тобой 210",
		onPress: () => router.push("/idService"),
	},
];

const Services = () => {
	return (
		<View style={tw`flex-1 items-center bg-gray-900 w-full py-5`}>
			<Navbar name="Services" centerName={false} icons={true} back={false} />
			<ScrollView contentContainerStyle={{ width: "90%", marginTop: 10, alignItems: "center" }}>
				{services.map((service) => (
					<ServiceCard
						key={service.id}
						imageUrl={service.imageUrl}
						title={service.title}
						subtitle={service.subtitle}
						onPress={service.onPress}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Services;
