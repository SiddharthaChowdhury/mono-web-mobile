import { Gallery, Gap } from "@mono/ui";
import React from "react";
import { ScrollView, View } from "react-native";
import { stylesHome } from "./styles";
import { useData } from "./useData";

export const Home = () => {
  const { data } = useData();

  return (
    <View style={stylesHome.container}>
      {data && (
        <ScrollView>
          <Gallery data={data} />
          <Gap.Vertical size={15} />
        </ScrollView>
      )}
    </View>
  );
};
