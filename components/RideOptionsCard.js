import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: 1,
    title: "UberX",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: 2,
    title: "Uber XL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: 3,
    title: "Uber LUX",
    multiplier: 1.75,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const TravelTimeInformation = useSelector(selectTravelTimeInformation);
  const SURGE_CHARGE_RATE = 1.5;
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="">
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {TravelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <TouchableOpacity
            onPress={() => setSelectedItem(item)}
            className={`flex-row items-center justify-between px-10 ${
              id === selectedItem?.id && "bg-gray-200"
            }`}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text className=" text-gray-500">
                {TravelTimeInformation?.duration.text} Travel time
              </Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (TravelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-red-200">
        <TouchableOpacity
          disabled={!selectedItem}
          className={`bg-black py-3 m-3 rounded-md ${
            !selectedItem && "bg-gray-300"
          }`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selectedItem?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
