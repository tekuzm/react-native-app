import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
// import SvgUri from "react-native-svg";
// import PostsIcon from "./assets/img/icons/grid.svg";

// ========== components ==========

import { RegistrationScreen } from "./src/Screens/auth/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/auth/LoginScreen.js";
import { PostsScreen } from "./src/Screens/main/PostsScreen.js";
import { CreatePostScreen } from "./src/Screens/main/CreatePostScreen.js";
import { ProfileScreen } from "./src/Screens/main/ProfileScreen.js";

// ========== icons ==========

import {
  postsIconSvg,
  profileIconSvg,
  createPostIconSvg,
} from "./assets/img/icons/icons.js";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const TabBarIcon = ({ focused, icon, size, style }) => {
  console.log(style.indicator);
  return (
    <View style={styles.tabIconContainer}>
      {focused && (
        <View style={[styles.tabIconIndicator, style && style.indicator]} />
      )}
      <SvgXml size={size} xml={icon} color={focused ? "white" : "black"} />
    </View>
  );
};

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <MainTab.Screen
        options={{
          // tabBarIcon: ({ focused, size, color }) => (
          //   // <SvgUri width={24} height={24} svgXmlData={PostsIcon} />
          //   <SvgXml
          //     size={size}
          //     xml={postsIconSvg}
          //     color={color}
          //     focused={focused}
          //   />
          // ),
          tabBarIcon: ({ focused, size }) => (
            <TabBarIcon
              focused={focused}
              size={size}
              icon={postsIconSvg}
              style={{
                indicator: styles.tabIconIndicatorPosts,
              }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <SvgXml size={size} xml={createPostIconSvg} color={color} />
          ),
        }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <SvgXml size={size} xml={profileIconSvg} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
  },
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconIndicator: {
    // position: "absolute",
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    // top: -4,
    // zIndex: 0,
  },
  tabIconIndicatorPosts: {},
});
