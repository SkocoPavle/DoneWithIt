import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {

  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
