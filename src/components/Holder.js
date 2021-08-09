import React from "react";
import { Animated } from "react-native";

const Holder = (props) => {
  const holderAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(holderAnimation, {
          toValue: 1,
          useNativeDriver: false,
          duration: 300,
        }),
        Animated.timing(holderAnimation, {
          toValue: 0,
          useNativeDriver: false,
          duration: 300,
        }),
      ])
    ).start();
  }, []);
  const holderStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: holderAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#444", "#333"],
    }),
    borderRadius: 12,
    marginBottom: props.bottom,
    marginRight: props.right,
  };
  return <Animated.View style={holderStyle}></Animated.View>;
};

export default Holder;
