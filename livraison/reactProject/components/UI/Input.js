import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { createTodoList } from "../../Helpers/CreateTodoList";
import pageStyle from "../../Style/PagesStyle";
import colors from "../../Style/Colors";
export default function Input(props) {
  const [title, setTitle] = useState("");

  const createTodoLists = () => {
    if (title === "") {
      props.setMessage("Titre vide");
      return;
    }

    const input = [
      {
        owner: {
          connect: {
            where: {
              username: props.username,
            },
          },
        },
        title: title,
      },
    ];

    createTodoList(input, props.token)
      .then((resulat) => {
        props.setMessage("Ajout d'une liste");
        setTitle("");
        props.refrech();
      })
      .catch((err) => {
        props.setMessage(err.message);
      });
  };
  return (
    <View style={pageStyle.todoListsPage}>
      <Text style={pageStyle.defaultText}>Add a new todo list</Text>
      <TextInput
        style={pageStyle.inputStyle}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Button
        color={colors.buttons}
        title="Add a new todo list"
        onPress={() => {
          createTodoLists();
        }}
      />
    </View>
  );
}
