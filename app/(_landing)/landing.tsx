import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
	ScrollView,
} from "react-native";
import Navbar from "../(navigation)/navbar";
import MasterCard from "@/components/cards/aboutMaster";
import AppointmentCard from "./AppointmentCard";
import tw from "tailwind-react-native-classnames";

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

const HomeScreen = () => {
	const [selectedFilter, setSelectedFilter] = useState<string>("Все");
	const [loading, setLoading] = useState(false);
	const [showAppointments, setShowAppointments] = useState(false);

	const handleFilterPress = (filter: string) => {
		setLoading(true);
		setSelectedFilter(filter);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	function getData(id: string) {}

	const handleFindMastersPress = () => {
		setShowAppointments(true);
	};

	const renderMasterCards = (filter: string) => {
		return Array.from({ length: 10 }).map((_, index) => (
			<MasterCard
				key={`${filter}-${index}`}
				name="Натали"
				imageUrl="https://fakeimg.pl/250x100/"
				alias="Beauty Wave"
				rating={5}
				location="Мирабадский р-н, ул. Нурафшон, 32"
				nextAppointment="Пт, 16 февраля"
				orders={52}
				clients={25}
			/>
		));
	};

	return (
		<View style={styles.container}>
			<View style={tw`mt-5`}>
				<Navbar name="Главная" icons={true} centerName={false} back={false} />
			</View>
			<ScrollView>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>Мои записи</Text>
					{showAppointments ? (
						<View>
							<AppointmentCard
								service="Наращивание ресниц"
								date="Пн, 10 февраля"
								time="12:30 - 13:30"
								details={{
									name: "Натали",
									imageUrl: "https://fakeimg.pl/250x100/",
									alias: "Beauty Wave",
									rating: 5,
									location: "Яккасарайский р-н, ул. Мирабад, 62а",
									nextAppointment: "Пт, 16 февраля",
									orders: 52,
									clients: 25,
									price: "350 000 сум",
									services: ["Стрижка", "Укладка", "Милирование"],
								}}
							/>
							<AppointmentCard
								service="Стрижка, укладка, покраска волос"
								date="Вт, 11 февраля"
								time="14:30 - 15:50"
								details={{
									name: "Натали",
									imageUrl: "https://fakeimg.pl/250x100/",
									alias: "Beauty Wave",
									rating: 5,
									location: "Яккасарайский р-н, ул. Мирабад, 62а",
									nextAppointment: "Пт, 16 февраля",
									orders: 52,
									clients: 25,
									price: "350 000 сум",
									services: ["Стрижка", "Укладка", "Милирование"],
								}}
							/>
						</View>
					) : (
						<View style={styles.card}>
							<Text style={styles.noRecordsText}>У вас пока нет записей</Text>
							<Text style={styles.description}>
								Найдите лучшие мастера в этом районе и запишитесь на прием онлайн!
							</Text>
							<TouchableOpacity style={styles.button} onPress={handleFindMastersPress}>
								<Text style={styles.buttonText}>Найти мастеров</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>Мои мастера</Text>
				</View>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.filterContainer}
				>
					{filters.map((filter) => (
						<TouchableOpacity
							key={filter}
							style={[
								styles.filterButton,
								selectedFilter === filter && styles.selectedFilterButton,
							]}
							onPress={() => handleFilterPress(filter)}
						>
							<Text
								style={[styles.filterText, selectedFilter === filter && styles.selectedFilterText]}
							>
								{filter}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				{loading ? (
					<View style={tw`h-[100%] p-10`}>
						<ActivityIndicator size="large" color="#9c0135" />
					</View>
				) : (
					<View style={styles.masterCardsContainer}>{renderMasterCards(selectedFilter)}</View>
				)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#21212e",
	},
	contentContainer: {
		padding: 20,
	},
	card: {
		backgroundColor: "#b9b9c9",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	noRecordsText: {
		fontSize: 20,
		color: "#9c0135",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: "#6a6a6e",
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#9c0135",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 50,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#fff",
	},
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
	masterCardsContainer: {
		padding: 20,
		backgroundColor: "#21212e",
	},
});

export default HomeScreen;
