import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import colors from "../Style/Colors";
export default function TodoItem(props) {
  const [done, setDone] = useState(props.item.done);
  React.useEffect(() => {
    setDone(props.item.done);
  }, [props.item.done]);

  return (
    <View style={styles.content}>
      <Switch
        value={done}
        onValueChange={(state) => {
          setDone(state);
          props.updateItem(props.item.id, state);
        }}
      />
      <Text
        style={[
          styles.text_item,
          { textDecorationLine: done ? "line-through" : "none" },
        ]}
      >
        {props.item.content}
      </Text>
      <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
        <Image
          source={require("../assets/poubelle.png")}
          style={{ height: 24, width: 24, tintColor: colors.bodyText }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    margin : 5,
    width: "100%",
  },
  text_item: {
    marginLeft: 10,
    width: 150,
  },
});
