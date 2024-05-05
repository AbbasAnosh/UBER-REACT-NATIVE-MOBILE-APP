import { Text, Image, View, TouchableOpacity, FlatList } from "react-native";

import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: 1,
    title: "Get a rid",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image:
      "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
    screen: "EatsScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View className={`${!origin && "opacity-20"} `}>
            <Image
              source={{ uri: item.image }}
              style={{ height: 120, width: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              style={{
                backgroundColor: "black",
                borderRadius: 50,
                width: 50,
                height: 50,
                marginTop: 10,
                padding: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
}
