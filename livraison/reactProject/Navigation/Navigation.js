import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TokenContext } from "../Context/Context";
import { View, Image, Text } from "react-native-web";
import NavigationTodo from "./NavigationTodo";
import HomeScreen from "../Screen/HomeScreen";
import SignInScreen from "../Screen/SignInScreen";
import SignOutScreen from "../Screen/SignOutScreen";
import SignUpScreen from "../Screen/SignUpScreen";
import pageStyle from "../Style/PagesStyle";
import colors from "../Style/Colors";
// setting the tab
const Tab = createBottomTabNavigator();
//function that defines the navigation
export default function Navigation() {
  return (
    <TokenContext.Consumer>
      {([token, setToken]) => (
        <NavigationContainer>
          {/* if token is null then sign in/up screens */}
          {token != null ? (
            <Tab.Navigator
              screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                  position: "absolute",
                  bottom: 25,
                  left: 20,
                  right: 20,
                  elevation: 0,
                  backgroundColor: colors.menu,
                  borderRadius: 15,
                  height: 90,
                  ...pageStyle.shadow,
                },
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                  {
                    headerTintColor: colors.headerText,
                    headerTitleStyle: {
                      fontWeight: "bold",
                    },
                    headerStyle: { backgroundColor: colors.menu },
                    tabBarIcon: ({ focused }) => (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={require("../assets/home.png")}
                          resizeMode="contain"
                          style={{
                            width: 25,
                            height: 25,
                            tintColor: focused
                              ? colors.selectedIcon
                              : colors.unselectedIcon,
                          }}
                        />
                        <Text
                          style={{
                            color: focused
                              ? colors.selectedIcon
                              : colors.unselectedIcon,
                            fontSize: 12,
                          }}
                        >
                          Home
                        </Text>
                      </View>
                    ),
                  }
                }
              />

              <Tab.Screen
                name="TodoLists"
                component={NavigationTodo}
                options={{
                  headerTintColor: colors.headerText,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerStyle: { backgroundColor: colors.menu },
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Image
                        source={require("../assets/to-do-list.png")}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                        }}
                      />
                      <Text
                        style={{
                          color: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                          fontSize: 12,
                        }}
                      >
                        TodoLists
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="SignOut"
                component={SignOutScreen}
                options={{
                  headerTintColor: colors.headerText,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerStyle: { backgroundColor: colors.menu },
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Image
                        source={require("../assets/logout.png")}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                        }}
                      />
                      <Text
                        style={{
                          color: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                          fontSize: 12,
                        }}
                      >
                        SignOut
                      </Text>
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          ) : (
            {/* if token is set then home/todolists/sign out screen*/},
            <Tab.Navigator
              screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                  position: "absolute",
                  bottom: 25,
                  left: 20,
                  right: 20,
                  elevation: 0,
                  backgroundColor: colors.menu,
                  borderRadius: 15,
                  height: 90,
                  ...pageStyle.shadow,
                },
              }}
            >
              <Tab.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerTintColor: colors.headerText,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerStyle: { backgroundColor: colors.menu },
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Image
                        source={require("../assets/SignIn.png")}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                        }}
                      />
                      <Text
                        style={{
                          color: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                          fontSize: 12,
                        }}
                      >
                        SignIn
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  headerTintColor: colors.headerText,
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                  headerStyle: { backgroundColor: colors.menu },
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Image
                        source={require("../assets/SignUp.png")}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          tintColor: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                        }}
                      />
                      <Text
                        style={{
                          color: focused
                            ? colors.selectedIcon
                            : colors.unselectedIcon,
                          fontSize: 12,
                        }}
                      >
                        SignUp
                      </Text>
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      )}
    </TokenContext.Consumer>
  );
}
