import { useMemo, useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import { TImageAtomProps } from "../../atoms/Picture/Picture";
import { PictureColumn } from "../../molecules/PictureColumn/PictureColumn";
import { stylesGallery } from "./styles";

type TProps = {
  data: TImageAtomProps[];
};

const Gallery = ({ data }: TProps) => {
  const style = useRef([stylesGallery.container, { gap: 8 }]).current;

  let { width: originalScreenWidth } = useWindowDimensions();
  const isLargeScreen = originalScreenWidth > 720;

  const numberOfColumns = isLargeScreen ? 3 : 2;
  const screenWidth = isLargeScreen ? 720 : originalScreenWidth;
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
