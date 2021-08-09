import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import IonIcon  from "react-native-vector-icons/Ionicons";
import StyledText from "./Text";
import source from "../../assets/believer.jpg";
import Holder from "./Holder";
const VSong = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image style={styles.image} source={source} />
      <View style={styles.content}>
        <StyledText style={styles.song} semibold>
          Believer
        </StyledText>
        <StyledText style={styles.artist} semibold>
          Imagine Dragons
        </StyledText>
      </View>

      <TouchableOpacity onPress={props.onMore}>
        <IonIcon name="ellipsis-vertical" color="#fff" size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export const VSongHolder = () => {
  return (
    <View style={styles.container}>
      <Holder width={64} height={64} right={12}/>
      <View style={styles.content}>
        <Holder bottom={4} width={120} height={18}/>
        <Holder width={100} height={18}/>
      </View>
      <Holder width={24} height={24}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  song: {
    fontSize: 18,
    lineHeight: 16 * 1.5,
  },
  artist: {
    fontSize: 12,
    color: "#ffffff60",
    lineHeight: 16,
  },
});

export default VSong;
