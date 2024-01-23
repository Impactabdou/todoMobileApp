import React, { useContext } from "react";
import { Button, View, Text } from "react-native";
import { TokenContext, UsernameContext } from "../Context/Context";
import pageStyle from "../Style/PagesStyle";
import colors from "../Style/Colors";
//function that render the sign out screen
export default function SignOutScreen() {
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UsernameContext);
  //rendering ui 
  return (
    <View style={pageStyle.signoutPage}>
      <Text style={pageStyle.titleText}>BYE!</Text>
      <Button
        color={colors.buttons}
        title="Sign me out"
        onPress={() => {
          //deleting the token and ui which makes the navigation switch to the signin/up screen
          setToken(null);
          setUser(null);
        }}
      />
    </View>
  );
}
