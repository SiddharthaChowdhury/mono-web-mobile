import { useMemo } from "react";
import { Image } from "react-native";
import { stylesPicture } from "./styles";

type TProps = {
  id: string;
  imageUrl: string;
  width: number;
  height: number;
};

const Picture = ({ imageUrl, width, height }: TProps) => {
  const source = useMemo(() => ({ uri: imageUrl }), [imageUrl]);
  const style = useMemo(
    () => [stylesPicture.image, { width, height }],
    [width, height]
  );

  return <Image source={source} style={style} resizeMode="cover" />;
};

export { Picture };
export type { TProps as TImageAtomProps };
