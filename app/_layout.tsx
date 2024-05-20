import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack initialRouteName="(tabs)">
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(_landing)/" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>

			{/* <Stack.Navigator initialRouteName="Profile">
				<Stack.Screen name="Profile" component={ProfilePage} />
				<Stack.Screen name="Share" component={ShareScreen} />
				<Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
				<Stack.Screen name="History" component={HistoryScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="Help" component={HelpScreen} />
				<Stack.Screen name="Notifications" component={NotificationsScreen} />
				<Stack.Screen name="LoyaltyCard" component={LoyaltyCardScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
				<Stack.Screen name="Logout" component={LogoutScreen} />
			</Stack.Navigator> */}
		</ThemeProvider>
	);
}
