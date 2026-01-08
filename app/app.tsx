import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const { location } = useLocalSearchParams<{ location: string }>();

  return (
    <>
        <WebView
            style={styles.container}
            source={{ uri: `https://dhbw.app/${location}` }}
        />
        <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
