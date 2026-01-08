import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    AsyncStorage.getItem('location').then(location => {
      if (location) {
        router.replace({
          pathname: '/app',
          params: { location },
        });
      }
    });
  }, []);


  return <Stack>
    <Stack.Screen name="index" />
    <Stack.Screen name="app" options={{headerShown: false}} />
  </Stack>;
}
