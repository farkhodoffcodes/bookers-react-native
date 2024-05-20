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

	const handleFilterPress = (filter: string) => {
		setLoading(true);
		setSelectedFilter(filter);

		// Simulate loading data
		setTimeout(() => {
			setLoading(false);
			// Here you can load your data based on the selected filter
		}, 1000);
	};

	const renderMasterCards = (filter: string) => {
		return Array.from({ length: 10 }).map((_, index) => (
			<MasterCard
				key={`${filter}-${index}`}
				name="Натали"
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
			<Navbar name="Главная" icons={true} centerName={false} back={false} />
			<ScrollView>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>Мои записи</Text>
					<View style={styles.card}>
						<Text style={styles.noRecordsText}>У вас пока нет записей</Text>
						<Text style={styles.description}>
							Найдите лучшие мастера в этом районе и запишитесь на прием онлайн!
						</Text>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Найти мастеров</Text>
						</TouchableOpacity>
					</View>
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
					<ActivityIndicator size="large" color="#B00020" />
				) : (
					<View style={styles.masterCardsContainer}>
						{selectedFilter !== "Все" && renderMasterCards(selectedFilter)}
					</View>
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
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
		shadowColor: "#fff",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	noRecordsText: {
		fontSize: 16,
		color: "#FF0000",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: "#777777",
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#B00020",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
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
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#D1D1D1",
		marginHorizontal: 5,
		width: 100,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	selectedFilterButton: {
		backgroundColor: "#B00020",
	},
	filterText: {
		fontSize: 14,
		color: "#777777",
	},
	selectedFilterText: {
		color: "#FFFFFF",
	},
	masterCardsContainer: {
		padding: 20,
	},
});

export default HomeScreen;
