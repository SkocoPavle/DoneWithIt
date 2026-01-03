import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, Dimensions} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        height: 70,
        width: "50%",
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
