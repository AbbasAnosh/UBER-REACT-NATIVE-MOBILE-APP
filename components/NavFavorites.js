import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    icon: "home",
    location: "Home",
    destination: "Calgary Stampede, Calgary, Canada",
  },
  {
    id: 2,
    icon: "briefcase",
    location: "Work",
    destination: "Calgary Olympic Park, Calgary, Canada",
  },
];
const NavFavorites = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5]" />}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.destination)}
          className="flex-row items-center p-5"
        >
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            className="bg-gray-300 mr-4 rounded-full p-3"
          />
          <View>
            <Text className="text-lg font-semibold">{location}</Text>
            <Text className=" text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
