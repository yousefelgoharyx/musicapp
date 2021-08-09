import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import StyledText from "./Text";
import Holder from "./Holder";
const HSong = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, props.style]}
    >
      <Image style={styles.image} source={props.image} />
      <View style={styles.content}>
        <StyledText style={styles.song}>{props.name}</StyledText>
        <StyledText style={styles.artist} semibold>
          {props.artist}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export const HSongHolder = () => {
  return (
    <View>
      <Holder width={150} height={150} bottom={8} right={16} />
      <Holder width={(150 * 70) / 100} height={20} bottom={4} />
      <Holder width={(150 * 50) / 100} height={20} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginRight: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  content: {
    width: 150,
  },
  song: {
    fontSize: 16,
    lineHeight: 16 * 1.2,
    marginBottom: 4,
  },
  artist: {
    fontSize: 12,
    color: "#ffffff60",
    lineHeight: 12 * 1.2,
    textTransform: "uppercase",
  },
});

export default HSong;
