import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#213350' }}>
      <WebView
        style={{
          flex: 1,
        }}
        testID="browser"
        source={{ uri: `https://dhbw.app` }}
      />
    </SafeAreaView>
  );
}
