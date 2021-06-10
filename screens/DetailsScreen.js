import React from "react";
import { Text, View } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  return (
    <View>
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
}
