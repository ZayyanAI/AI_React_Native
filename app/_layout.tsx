import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    Exo350B: require("../assets/fonts/EXOT350B.ttf"),
    "Inter-Light": require("../assets/fonts/Inter_28pt-Light.ttf"),
    "Inter-Italic": require("../assets/fonts/Inter_28pt-Italic.ttf"),
    "Inter-SemiBoldItalic": require("../assets/fonts/Inter_28pt-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
