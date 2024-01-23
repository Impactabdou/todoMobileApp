import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native-web";
import pageStyle from "../Style/PagesStyle";

export default function TodoLists(props) {
  return (
    <View>
      <TouchableOpacity
        style={pageStyle.todoListsCard}
        onPress={() => {
          props.getDetails(props.item.id);
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={pageStyle.boldText}>{props.item.title}</Text>
          <TouchableOpacity
            onPress={() => props.deleteTodoLists(props.item.id)}
          >
            <Image
              source={require("../assets/poubelle.png")}
              style={pageStyle.IconStyle}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
