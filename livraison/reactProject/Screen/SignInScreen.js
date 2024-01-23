import React, { useContext, useState } from "react";
import { TextInput, Button, View, Text, Image } from "react-native-web";
import { TokenContext, UsernameContext } from "../Context/Context";
import { signIn } from "../Helpers/SignIn";
import pageStyle from "../Style/PagesStyle";
import colors from "../Style/Colors";
//function that renders the signin screen
function SignInScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const [user, setUser] = useContext(UsernameContext);
  const [error, setError] = useState("");
//function that generated the token/user for a new user from the server and sets it with the token context/ user context
  const onSubmit = () => {
    if (login === "") {
      setError("Empty username");
      return;
    }
    signIn(login, password)
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
//rendering UI
  return (
    <TokenContext.Consumer>
      {([token, setToken]) => (
        <UsernameContext.Consumer>
          {([username, setUsername]) => (
            <View style={pageStyle.loginPage}>
              <Image
                style={pageStyle.sginInImage}
                source={require("../assets/to-do-list.png")}
              />
              <View>
                <View>
                  <Text style={pageStyle.textSignIn}>
                    Bienvenue sur la page de connexion :{" "}
                  </Text>
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
                  title="Sign in"
                  color={colors.buttons}
                  onPress={onSubmit}
                />
                <Text style={pageStyle.errorText}>{error}</Text>
              </View>
            </View>
          )}
        </UsernameContext.Consumer>
      )}
    </TokenContext.Consumer>
  );
}

export default SignInScreen;
