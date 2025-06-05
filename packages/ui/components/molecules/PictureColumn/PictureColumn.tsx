import { View } from "react-native";
import { Picture, TImageAtomProps } from "../../atoms/Picture/Picture";
import { stylesPictureColumn } from "./styles";

type TProps = {
  items: TImageAtomProps[];
  columnWidth: number;
};

const PictureColumn = ({ items, columnWidth }: TProps) => {
  return (
    <View style={stylesPictureColumn.column}>
      {items.map((item) => (
        <Picture
          id={item.id}
          key={item.id}
          imageUrl={item.imageUrl}
          width={columnWidth}
          height={item.height * (columnWidth / item.width)}
        />
      ))}
    </View>
  );
};

export { PictureColumn };
export type { TProps as TColumnMoleculeProps };
