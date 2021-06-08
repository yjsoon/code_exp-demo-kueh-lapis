import React from "react";
import { View, Text } from "react-native";

export default function BlockRGB({ red, green, blue }) {
  return (
    <View
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1.0)`,
        width: "100%",
        height: 80,
      }}
    ></View>
  );
}
