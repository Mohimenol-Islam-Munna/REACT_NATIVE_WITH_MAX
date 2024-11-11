import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContainerItem}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    padding: 10,
    flexWrap: "wrap",
  },

  textContainer: {
    flexBasis: "33.33%",
    padding: 5,
    color: "white",
  },

  textContainerItem: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});
