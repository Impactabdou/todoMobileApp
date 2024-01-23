import React, { useContext, useState, useEffect } from "react";
import { UsernameContext, TokenContext } from "../Context/Context";
import { FlatList, View, Text, StyleSheet } from "react-native-web";
import { getTodoLists } from "../Helpers/TodoLists";
import Input from "../components/UI/Input";
import TodoLists from "../components/todoLists";
import { deleteTodoList } from "../Helpers/DeleteTodoList";
import pageStyle from "../Style/PagesStyle";

function TaskListsScreen({ navigation }) {
//setting up all variables
  const [token, setToken] = useContext(TokenContext);
  const [username, setUsername] = useContext(UsernameContext);
  const [dataList, setDataList] = useState(Array);
  const [initialeLoad, setInitialLoad] = useState(0);
  const [message, setMessage] = useState("");
// use effect to fetch the the todolists data
  useEffect(() => {
    if (initialeLoad === 0) {
      setInitialLoad(initialeLoad + 1);
      setMessage("Initial load");
      refrech();
    }
  }, [dataList, initialeLoad]);
// function that fetches all the todolists data
  function refrech() {
    getTodoLists(username, token)
      .then((data) => {
        setTimeout(() => {
          setMessage("");
        }, 1000);
        setDataList(data);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }
// function that runs a mutation on the sever to delete the todolist
  const deleteTodoLists = (id) => {
    deleteTodoList(id, token)
      .then(() => {
        setMessage("Todo list delted");
        refrech();
      })
      .catch((err) => setMessage(err.message));
  };
//function that permits to navigate to the selected todolist
  const getDetails = (id) => {
    navigation.navigate("Details", { listID: id });
  };
//rendering UI
  return (
    <View style={pageStyle.loginPage}>
      <View>
        <Text style={pageStyle.defaultText}>
          List count : {dataList.length}{" "}
        </Text>
        <Input
          username={username}
          token={token}
          refrech={refrech}
          setMessage={setMessage}
        ></Input>
        <Text style={pageStyle.feedbackText}>{message}</Text>
      </View>
      <View style={pageStyle.todoListsContainer}>
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <TodoLists
              item={item}
              deleteTodoLists={deleteTodoLists}
              getDetails={getDetails}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal={false}
        />
      </View>
    </View>
  );
}

export default TaskListsScreen;
