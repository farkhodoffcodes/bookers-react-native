import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface ServiceCardProps {
	imageUrl: string;
	title: string;
	subtitle: string;
	onPress: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, subtitle, onPress }) => {
	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: imageUrl }} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	card: {
		backgroundColor: "#b9b9c9",
		borderRadius: 20,
		gap: 10,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		padding: 20,
		marginBottom: 10,
	},
	imageContainer: {
		width: 70,
		height: 70,
		borderRadius: 50,
		overflow: "hidden",
		marginRight: 10,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	textContainer: {
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
	},
	subtitle: {
		fontSize: 14,
		color: "#6a6a6e",
	},
});

export default ServiceCard;
