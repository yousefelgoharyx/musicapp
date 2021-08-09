import React from "react";
import { View, StyleSheet } from "react-native";
import Switch from "./Switch";
import StyledText from "./Text";

const ProfileOption = (props) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text}>{props.children}</StyledText>
      <Switch open={props.isOpen} onPress={props.onSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
  },
});

export default ProfileOption;
