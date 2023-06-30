import { StyleSheet, View } from "react-native";
import StepCounter from "./parts/steps/StepCounter";

export default function App() {
  return (
    <View style={styles.container}>
      <StepCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});
