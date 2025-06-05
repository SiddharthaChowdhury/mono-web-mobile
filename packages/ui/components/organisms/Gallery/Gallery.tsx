import { Platform, useWindowDimensions, View } from "react-native";
import { TImageAtomProps } from "../../atoms/Picture/Picture";
import { PictureColumn } from "../../molecules/PictureColumn/PictureColumn";
import { stylesGallery } from "./styles";
import { useMemo, useRef } from "react";

type TProps = {
  data: TImageAtomProps[];
};

const Gallery = ({ data }: TProps) => {
  const style = useRef([stylesGallery.container, { gap: 8 }]).current;

  const { width: screenWidth } = useWindowDimensions();

  const numberOfColumns = Platform.OS === "web" ? 3 : 2;
  const columnWidth = screenWidth / numberOfColumns - 16; // 16 = margin compensation

  const columns = useMemo(() => {
    const cols: TImageAtomProps[][] = Array.from(
      { length: numberOfColumns },
      () => []
    );

    data.forEach((item, index) => {
      cols[index % numberOfColumns].push(item);
    });

    return cols;
  }, [data]);

  return (
    <View style={style}>
      {columns.map((columnItems, index) => (
        <PictureColumn
          key={index}
          items={columnItems}
          columnWidth={columnWidth}
        />
      ))}
    </View>
  );
};

export { Gallery };
export type { TProps as TGalleryProps };
