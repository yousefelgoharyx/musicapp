import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import Library from "../Screens/Library";
import IonIcon from "react-native-vector-icons/Ionicons";
import  MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import StyledText from "../components/Text";
import source from "../../assets/believer.jpg";
const Tab = createMaterialBottomTabNavigator();
const Main = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        barStyle={{
          backgroundColor: "#000",
        }}
        sceneAnimationEnabled={true}
        keyboardHidesNavigationBar={false}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcon
                name={"home-filled"}
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcon
                name="search"
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="library"
          component={Library}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcon
                name="headset"
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: "Me",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcon
                name="person"
                color={color}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Pressable
        onPress={() => navigation.navigate("player")}
        style={styles.player}
      >
        <View style={styles.content}>
          <Image style={styles.img} source={source} />
          <View>
            <StyledText style={styles.song} semibold>
              Believer
            </StyledText>
            <StyledText style={styles.artist} bold>
              Imagine Dragons
            </StyledText>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log("pay")}>
          <IonIcon name="play" size={24} color="#FFF" />
        </TouchableOpacity>
      </Pressable>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  player: {
    height: 56,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 54,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#121212",
    paddingHorizontal: 16,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 40 / 2,
    flexShrink: 0,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  song: {
    fontSize: 16,
    lineHeight: 16 * 1.2,
  },
  artist: {
    opacity: 0.2,
    fontSize: 12,
    lineHeight: 12 * 1.2,
  },
});
