import Button from "@/components/Button";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  function handleButtonPress(input: string) {
    switch (input) {
      case "=":
        try {
          const exp = expression.replace(/x/g, "*").replace(/÷/g, "/");
          setResult(`= ${eval(exp)}`);
        } catch (e) {
          setResult("Error");
        }
        break;
      case "C":
        setExpression("");
        setResult("0");
        break;
      case "⌫":
        setExpression(expression.slice(0, -1));
        setResult("");
        break;
      default:
        setExpression(expression + input);
        setResult("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
        {result && <Text style={styles.resultText}>{result}</Text>}
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <Button value="C" onClick={handleButtonPress} />
          <Button value="⌫" onClick={handleButtonPress} />
          <Button value="%" onClick={handleButtonPress} />
          <Button value="÷" onClick={handleButtonPress} />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="7" onClick={handleButtonPress} />
          <Button value="8" onClick={handleButtonPress} />
          <Button value="9" onClick={handleButtonPress} />
          <Button value="x" onClick={handleButtonPress} />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="4" onClick={handleButtonPress} />
          <Button value="5" onClick={handleButtonPress} />
          <Button value="6" onClick={handleButtonPress} />
          <Button value="-" onClick={handleButtonPress} />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="1" onClick={handleButtonPress} />
          <Button value="2" onClick={handleButtonPress} />
          <Button value="3" onClick={handleButtonPress} />
          <Button value="+" onClick={handleButtonPress} />
        </View>
        <View style={styles.buttonsRow}>
          <Button value="00" onClick={handleButtonPress} />
          <Button value="0" onClick={handleButtonPress} />
          <Button value="." onClick={handleButtonPress} />
          <Button value="=" onClick={handleButtonPress} />
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
    fontSize: 36,
    color: "#aaa",
  },
  resultText: {
    fontSize: 72,
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
