import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type Props = {
  value: string;
  style?: StyleProp<ViewStyle>;
};

export default function Button({ value, style = {} }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => console.log("Button pressed")}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    margin: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#333",
  },
});
