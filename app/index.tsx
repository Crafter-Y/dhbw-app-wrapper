import { Button, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const setStorage = async (location: string) => {
    await AsyncStorage.setItem('location', location);
    router.replace({
      pathname: '/app',
      params: { location },
    });
  }

  return (
    <View>
      <Text>Select your Location</Text>
      <Button title="Karlsruhe" onPress={() => setStorage("KA")} />
    </View>
  );
}
