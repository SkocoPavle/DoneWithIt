import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View} from 'react-native';


export default function App() {

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style = {{
        backgroundColor: "dodgerblue",
        flex: 2,
      }}/>
      
      <View style = {{
        backgroundColor: "yellow",
        flex: 1,
      }}/>

      <View style = {{
        backgroundColor: "tomato",
        flex: 1,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
