import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  value: string;
  onClick: (value: string) => void;
};

export default function Button({ value, onClick, style = {} }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => onClick(value)}
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
