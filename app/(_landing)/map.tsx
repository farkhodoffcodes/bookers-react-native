import React, { useEffect, useRef, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import CustomMarker from "./CustomerMarker";

interface LocationCoords {
	latitude: number;
	longitude: number;
}

const initialLocation: LocationCoords = {
	latitude: 38.8472242,
	longitude: 65.7963916,
};

export default function Map() {
	const [myLocation, setMyLocation] = useState<LocationCoords>(initialLocation);
	const [pin, setPin] = useState<LocationCoords | null>(null);
	const [region, setRegion] = useState<Region>({
		latitude: initialLocation.latitude,
		longitude: initialLocation.longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	const mapRef = useRef<MapView | null>(null);

	useEffect(() => {
		setPin(initialLocation);
		_getLocation();
	}, []);

	const _getLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				// console.warn("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setMyLocation(location.coords as LocationCoords);
			// console.log(location);
		} catch (err) {
			// console.warn(err);
		}
	};

	const focusOnLocation = () => {
		if (myLocation.latitude && myLocation.longitude) {
			const newRegion = {
				latitude: myLocation.latitude,
				longitude: myLocation.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			};
			if (mapRef.current) {
				mapRef.current.animateToRegion(newRegion, 1000);
			}
		}
	};

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={region}
				onRegionChangeComplete={setRegion}
				ref={mapRef}
				provider="google"
			>
				{myLocation.latitude && myLocation.longitude && (
					<Marker
						coordinate={{
							latitude: myLocation.latitude,
							longitude: myLocation.longitude,
						}}
						title="My current location"
						description="I am here"
					/>
				)}
				{myLocation.latitude && myLocation.longitude && (
					<CustomMarker
						coordinate={{
							latitude: myLocation.latitude,
							longitude: myLocation.longitude,
						}}
						title="My current location"
						image={require("../../assets/images/Beauty-women,natural-spa,-cosmetic,-logo-design-on-transparent-background-PNG 1.png")}
					/>
				)}
				{pin && pin.latitude && pin.longitude && (
					<Marker
						coordinate={{
							latitude: pin.latitude,
							longitude: pin.longitude,
						}}
						title="Default location"
						description="I am here"
					/>
				)}
			</MapView>
			<View style={styles.buttonContainer}>
				<Button title="Get Location" onPress={focusOnLocation} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	buttonContainer: {
		position: "absolute",
		bottom: 20,
		width: "100%",
		alignItems: "center",
	},
	markerImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
});
