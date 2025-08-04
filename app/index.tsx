import Button from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>99+1</Text>
        <Text style={styles.resultText}>= 100</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <Button value="C" />
          <Button value="⌫" />
          <Button value="%" />
          <Button value="÷" />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="x" />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="00" />
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  displayContainer: {
    padding: 20,
    alignItems: "flex-end",
  },
  expressionText: {
    fontSize: 24,
    color: "#aaa",
  },
  resultText: {
    fontSize: 36,
    color: "#333",
    marginTop: 5,
  },
  buttonsContainer: {
    padding: 10,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
