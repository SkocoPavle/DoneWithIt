import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View} from 'react-native';


export default function App() {

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: 'row', // gorizontal
      justifyContent: "center", // main
      alignItems: 'center', // secondary
    }}>
      <View style = {{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 300,
        alignSelf: "flex-start",
      }}/>
      
      <View style = {{
        backgroundColor: "yellow",
        width: 100,
        height: 200,
      }}/>

      <View style = {{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
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
