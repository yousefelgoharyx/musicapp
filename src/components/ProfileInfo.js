import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./Text";

const ProfileInfo = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7} style={styles.container}>
      <StyledText semibold style={styles.text}>
        {props.title}
      </StyledText>
      <StyledText style={styles.subtext}>{props.subtitle}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
  },
  subtext: {
    fontSize: 12,
    opacity: 0.2,
  },
});

export default ProfileInfo;
