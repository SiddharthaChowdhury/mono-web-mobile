import { useMemo } from "react";
import { View } from "react-native";

type TProps = {
  size: number;
};

const Vertical = ({ size }: TProps) => {
  const style = useMemo(() => ({ marginVertical: size / 2 }), [size]);
  return <View style={style} />;
};

const Horizontal = ({ size }: TProps) => {
  const style = useMemo(() => ({ marginHorizontal: size / 2 }), [size]);
  return <View style={style} />;
};

const Gap = {
  Vertical,
  Horizontal,
};

export { Gap };
