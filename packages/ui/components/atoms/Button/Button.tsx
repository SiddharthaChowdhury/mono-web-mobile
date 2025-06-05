import { Text, TouchableOpacity } from "react-native";
import { stylesButton } from "./styles";

type TProps = {
  onPress: () => void;
  title: string;
};

const Button = ({ onPress, title }: TProps) => {
  return (
    <TouchableOpacity style={stylesButton.button} onPress={onPress}>
      <Text style={stylesButton.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
