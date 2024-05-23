import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type MasterCardProps = {
	name: string;
	alias: string;
	rating: number;
	location: string;
	price: string;
	imageUrl: string;
	master: string;
	openChildComponent: JSX.Element;
	icons?: JSX.Element;
	onPress?: () => void;
	btnText: string;
};

const MasterCardLocation: React.FC<MasterCardProps> = ({
	name,
	alias,
	rating,
	location,
	price,
	imageUrl,
	master,
	icons,
	onPress,
	btnText
}) => {
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<Text key={i} style={i < rating ? styles.starFilled : styles.starEmpty}>★</Text>
			);
		}
		return stars;
	};

	return (
		<View style={styles.card}>
			<View style={styles.header}>
				<Image source={{ uri: imageUrl }} style={styles.image} />
				<View style={styles.headerText}>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.alias}>{alias}</Text>
					</View>
					<Text style={styles.masterType}>{master}</Text>
				</View>
				<View style={styles.ratingContainer}>
					<View style={{ flexDirection: "row" }}>{renderStars()}</View>
					<Text className="text-[#9C0A35] font-bold">{price}</Text>
				</View>
			</View>
			<Text style={styles.location}>{location}</Text>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}
						onPress={onPress}>{btnText}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.locationButton}>
					<Text style={styles.locationButtonText}
						onPress={onPress}
					>
						{icons}
					</Text>

				</TouchableOpacity>
				
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#B9B9C9",
		borderRadius: 10,
		padding: 15,
		marginVertical: 10,

	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	headerText: {
		flex: 1,
		justifyContent: "center",
	},
	nameContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 5,
	},
	alias: {
		fontSize: 12,
		backgroundColor: "#D1D1D1",
		borderRadius: 5,
		paddingHorizontal: 5,
		paddingVertical: 2,
	},
	masterType: {
		fontSize: 14,
		color: "#777777",
	},
	ratingContainer: {
		alignItems: "flex-end",
	},
	starFilled: {
		color: "#B00020",
		fontSize: 16,
	},
	starEmpty: {
		color: "#CCCCCC",
		fontSize: 16,
	},
	orderInfo: {
		fontSize: 10,
		color: "#777777",
		textAlign: "right",
	},
	location: {
		fontSize: 14,
		color: "#777777",
		marginBottom: 10,
	},
	nextAppointment: {
		fontSize: 14,
		color: "#000000",
		marginBottom: 10,
		fontWeight: "bold",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#B00020",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		flex: 1,
		marginRight: 10,
		alignItems: "center",
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	locationButton: {
		borderRadius: 25,
		padding: 10,
		borderColor: "#D1D1D1",
		borderWidth: 1,
		backgroundColor: "#B00020",
	},
	locationButtonText: {
		fontSize: 20,
	},
});

export default MasterCardLocation;
