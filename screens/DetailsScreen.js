import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  const avgColor = (red + green + blue) / 3;
  const textColor = avgColor < 140 ? "white" : "black";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)` },
      ]}
    >
      <Text style={{ color: textColor }}>Red: {red}</Text>
      <Text style={{ color: textColor }}>Green: {green}</Text>
      <Text style={{ color: textColor }}>Blue: {blue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
