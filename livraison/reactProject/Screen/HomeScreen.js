import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { UsernameContext } from "../Context/Context";
import pageStyle from "../Style/PagesStyle";
//function that renders the home screen
export default function HomeScreen() {
  const [username, setUsername] = useContext(UsernameContext);
  return (
    <View style={pageStyle.homePage}>
      <Text style={pageStyle.titleText}>Welcome !</Text>
      <Text style={pageStyle.titleText}>You are logged as</Text>
      <Text style={pageStyle.titleText}>{username}</Text>
    </View>
  );
}
