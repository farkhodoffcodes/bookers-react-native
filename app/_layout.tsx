import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

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
			<Stack initialRouteName="index">
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/firstWelcome" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/secondWelcome" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(notification)/index" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(personal_data)/personal_data" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(card_page)/card_page" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(create_card)/create_card" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(card_verify)/index" options={{ headerShown: false }} />
				<Stack.Screen name="(_landing)/" options={{ headerShown: false }} />
				<Stack.Screen name="(_landing)/map" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/auth" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/information" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/numberCreate" options={{ headerShown: false }} />
				<Stack.Screen name="(sevices)/services" options={{ headerShown: false }} />
				<Stack.Screen name="(sevices)/idService" options={{ headerShown: false }} />
				<Stack.Screen name="(sevices)/searchPage" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/historyUser" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/repet" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/application" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/historyTime" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/serviceHistory" options={{ headerShown: false }} />
				<Stack.Screen name="(pages)/(profile)/(payment)/(history)/history" options={{ headerShown: false }} />
				{/* <Stack.Screen name="(auth)/auth" options={{ headerShown: false }} /> */}



				<Stack.Screen name="(auth)/switchPage" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/createAccPage" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}
