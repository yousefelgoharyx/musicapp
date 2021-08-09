import React from 'react';
import {TextInput, StyleSheet, View, Animated} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Icon = Animated.createAnimatedComponent(IonIcon);
const Input = props => {
  const iconAnimation = React.useRef(new Animated.Value(0.4)).current;
  const handleInputFocus = () => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };
  const handleInputBlur = () => {
    Animated.timing(iconAnimation, {
      toValue: 0.4,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };
  const iconStyles = {
    opacity: iconAnimation,
  };
  return (
    <View style={[styles.wrapper, props.style]}>
      <Icon
        name={props.icon}
        color="#fff"
        size={20}
        style={[styles.icon, iconStyles]}
      />
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="#ffffff60"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#121212',
    width: '100%',
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    flex: 1,
    height: 56,
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    top: 1
  },
  icon: {
    marginRight: 8,
  },
});
export default Input;
