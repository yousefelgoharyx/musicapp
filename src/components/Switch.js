import React from "react";
import { StyleSheet, Animated, Pressable } from "react-native";

const Switch = (props) => {
  const switchAnimation = React.useRef(new Animated.Value(props.open ? 20 : 0))
    .current;
  React.useEffect(() => {
    Animated.spring(switchAnimation, {
      toValue: props.open ? 20 : 0,
      useNativeDriver: false,
    }).start();
  }, [props.open]);
  const switchAnimationStyles = {
    transform: [{ translateX: switchAnimation }],
  };
  return (
    <Pressable onPress={props.onPress}>
      <Animated.View
        style={[
          styles.switch,
          {
            backgroundColor: switchAnimation.interpolate({
              inputRange: [0, 20],
              outputRange: ["rgb(77,77,77)", "rgb(51,119,255)"],
            }),
          },
        ]}
      >
        <Animated.View
          style={[styles.circle, switchAnimationStyles]}
        ></Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 44,
    height: 24,
    backgroundColor: "#3377ff",
    borderRadius: 12,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});

export default Switch;
