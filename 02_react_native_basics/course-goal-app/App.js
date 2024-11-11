import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [courseGoal, setCourseGoal] = useState("");

  const [courseGoalList, setCourseGoalList] = useState([]);

  console.log("courseGoalList :", courseGoalList);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={courseGoal}
          style={styles.textInput}
          placeholder="Enter your course goal!"
          onChangeText={(value) => {
            console.log("on change handler :", value);

            setCourseGoal(value);
          }}
        />
        <Button
          title="Add Goal"
          onPress={() => {
            console.log("courseGoal :", courseGoal);
            setCourseGoalList((prev) => [...prev, courseGoal]);
            // setCourseGoal("");
          }}
        />
      </View>

      <View style={styles.listContainer}>
        <Text>List of goal :</Text>
        <View>
          <ScrollView>
            {courseGoalList.map((goal, index) => (
              <View>
                <Text key={index}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    marginTop: 50,
    padding: 20,
    borderWidth: 1,
    borderColor: "green",
    boxSizing: "border-box",
    flexDirection: "column",
  },
  inputContainer: {
    flexBasis: "10%",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 3,
  },
  listContainer: {
    flexBasis: "80%",
    borderWidth: 1,
    borderColor: "red",
  },
});
