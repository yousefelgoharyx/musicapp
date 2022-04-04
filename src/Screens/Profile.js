import React, { useState } from "react";
import Page from "../components/Page";
import ProfileOption from "../components/ProfileOption";
import ProfileInfo from "../components/ProfileInfo";
import ProfileHead from "../components/ProfileHead";
import { createStackNavigator } from "@react-navigation/stack";
import Name from "../Stacks/Name";
import Email from "../Stacks/Email";
const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName="main" screenOptions={{headerMode: 'none'}}>
      <Stack.Screen name="main" component={MainStack} />
      <Stack.Screen name="email" component={Email} />
      <Stack.Screen name="name" component={Name} />
      <Stack.Screen name="password" component={Name} />
    </Stack.Navigator>
  );
};

const MainStack = ({ navigation }) => {
  const [autoplay, setAutoplay] = useState(true)
  return (
    <Page title="Profile">
      <ProfileHead />
      <ProfileInfo
        onPress={() => navigation.navigate("name")}
        title="Name"
        subtitle="Anna Steve"
      />
      <ProfileInfo
        title="Email"
        subtitle="yousefelgoharyx@gmail.com"
        onPress={() => navigation.navigate("email")}
      />
      <ProfileInfo title="Password" subtitle="Change your password" />
      <ProfileInfo title="Version" subtitle="8.6.14.975" />
      <ProfileInfo title="Support" subtitle="Send us an email" />
      <ProfileOption isOpen={autoplay} onSwitch={() => setAutoplay(!autoplay)}>Autoplay</ProfileOption>
      <ProfileOption isOpen={true}>Explicit content</ProfileOption>
      <ProfileOption isOpen={true}>Automix</ProfileOption>
      <ProfileOption isOpen={true}>Show unplayable songs</ProfileOption>
      <ProfileOption isOpen={true}>Notifications</ProfileOption>
    </Page>
  );
};

export default Home;
