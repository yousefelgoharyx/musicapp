import React from "react";
import { Text } from "react-native";

export default function StyledText(props) {
  let fontFamily = "Poppins-Regular";
  if (props.bold) fontFamily = "Poppins-Bold";
  if (props.semibold) fontFamily = "Poppins-SemiBold";
  return (
    <Text
      numberOfLines={1}
      style={[{ fontFamily, color: "#fff" }, { ...props.style }]}
    >
      {props.children}
    </Text>
  );
}
