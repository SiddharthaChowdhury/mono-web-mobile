import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TProps = {
  onPress: () => void;
  title: string;
};

export const Button = ({ onPress, title }: TProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
