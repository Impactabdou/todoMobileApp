import React, { useContext, useState } from "react";
import {
  TextInput,
  Button,
  View,
  Text,
  Image,
} from "react-native-web";
import { TokenContext, UsernameContext } from "../Context/Context";
import { signUp } from "../Helpers/SignUp";
import pageStyle from "../Style/PagesStyle";
import colors from "../Style/Colors";
//function that runders the sign up screen
function SignUpScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UsernameContext);
  const [userId, setUserId] = useContext(TokenContext);
  const [error, setError] = useState("");
  const minLength = 8;
//function that generated the token/user from the server and sets it with the token context/ user context
  const onSubmit = () => {
    if (login === "") {
      setError("Empty username");
      return;
    }
    if (password.length < minLength) {
      setError("Password must be at least 8 characters long");
      return;
    }
    signUp(login, password)
      .then((token) => {
        setError("");
        setToken(token);
        setUser(login);
        navigation.navigate("Home");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
//rendering ui
  return (
    <TokenContext.Consumer>
      {([token, setToken]) => (
        <UsernameContext.Consumer>
          {([username, setUsername]) => (
            <View style={pageStyle.loginPage}>
              <Image
                style={pageStyle.sginInImage}
                source={require("../assets/add-user.png")}
              />
              <View>
                <Text style={pageStyle.textSignIn}>
                  page de création de compte:{" "}
                </Text>
                <View>
                  <TextInput
                    style={pageStyle.inputStyle}
                    placeholder="Username"
                    onChangeText={(text) => setLogin(text)}
                    value={login}
                  />
                </View>
                <View>
                  <TextInput
                    style={pageStyle.inputStyle}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                  />
                </View>
              </View>
              <View style={pageStyle.buttonLogin}>
                <Button
                  color={colors.buttons}
                  title="Sign up"
                  onPress={onSubmit}
                />
                <Text style={{ color: "red", margin: "10px" }}>{error}</Text>
              </View>
            </View>
          )}
        </UsernameContext.Consumer>
      )}
    </TokenContext.Consumer>
  );
}

export default SignUpScreen;
