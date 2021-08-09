import React from 'react';
import {StatusBar, Animated, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider} from 'react-native-paper';
import Theme from './theme'
import Main from './src/Stacks/Main';
import Player from './src/Stacks/Player';


const Stacks = createStackNavigator();
const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.height, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.height * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};



export default function App() {
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Provider>
        <NavigationContainer theme={Theme}>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <Stacks.Navigator
            screenOptions={{
              cardStyleInterpolator: forSlide,
              headerMode: 'modal',
            }}>
            <Stacks.Screen name="main" component={Main} />
            <Stacks.Screen name="player" component={Player} />
          </Stacks.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
