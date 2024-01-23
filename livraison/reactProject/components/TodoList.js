import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  ProgressBar,
  TouchableOpacity,
} from "react-native";

import TodoItem from "./TodoItem";
import { TokenContext } from "../Context/Context";
import { getTodoData } from "../Helpers/todoData";
import { addTodoItem } from "../Helpers/addTodoItem";
import { deleteTodoItem } from "../Helpers/deleteTodo";
import { updateTodo } from "../Helpers/updateTodoItem";
import PagesStyle from "../Style/PagesStyle";
import colors from "../Style/Colors";
export default function TodoList(props) {
  const [todos, setTodos] = useState(Array);
  const [tempTodos, setTempTodos] = useState(Array);
  const [count, setCount] = useState(0);
  const [newTodoText, setNewTodoText] = useState("");
  const [temp, setTemp] = useState(false);
  const [token, setToken] = React.useContext(TokenContext);
  const [bug, setBug] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (todos.length === 0 && bug === 0) {
      setBug(bug + 1);
      setMessage("Chargement initiale");
      refresh();
    }
  }, [todos, tempTodos]);

  function refresh() {
    getTodoData(props.listID, token)
      .then((res) => {
        setTimeout(() => {
          setMessage("");
        }, 1000);
        setTodos(res);
        setTempTodos(res);
        setCount(res.filter((item) => item.done).length);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }

  const updateItem = (id, state) => {
    updateTodo(id, props.listID, state, token)
      .then(() => {
        setMessage("Todo Item Updated");
        refresh();
      })
      .catch((err) => setMessage(err.message)); //update todo state
  };

  const deleteTodo = (id) => {
    deleteTodoItem(id, props.listID, token)
      .then(() => {
        setMessage("Todo Item Deleted");
        refresh();
      })
      .catch((err) => setMessage(err.message)); //delete todo
  };

  const addNewTodo = () => {
    if (newTodoText == "") {
      setMessage("empty title");
      return;
    }
    addTodoItem(props.listID, newTodoText, token)
      .then(() => {
        setNewTodoText("");
        setMessage("Todo Item Created");
        refresh();
      })
      .catch((err) => setMessage(err.message));
    //add new todo
  };

  const checkAll = () => {
    tempTodos.map((item) => {
      updateItem(item.id, true);
    });
  };
  const unCheckAll = () => {
    tempTodos.map((item) => {
      updateItem(item.id, false);
    });
  };
  const showDone = () => {
    const newTodos = todos.filter((item) => item.done == true);
    setTempTodos(newTodos);
    setTemp(true);
    setCount(todos.filter((item) => item.done).length);
  };
  const showUnDone = () => {
    const newTodos = todos.filter((item) => item.done == false);
    setTemp(true);
    setTempTodos(newTodos);
    setCount(0);
  };
  const showAll = () => {
    setTemp(false);
    setTempTodos(todos);
    setCount(todos.filter((item) => item.done == true).length);
  };

  return (
    <View style={PagesStyle.loginPage}>
      <View style={PagesStyle.inputContainer}>
        <Text>
          progression :{" "}
          {todos.length !== 0 ? Math.floor((count / todos.length) * 100) : 0}%
        </Text>
        <ProgressBar
          style={PagesStyle.ProgressBar}
          color={colors.buttons}
          indeterminate={false}
          progress={count / todos.length}
        />
        <Text style={PagesStyle.defaultText}>{count} Done Items.</Text>
        <TextInput
          style={PagesStyle.inputStyle}
          onChangeText={setNewTodoText}
          placeholder="saisir ici un nouvel item"
          onSubmitEditing={addNewTodo}
          value={newTodoText}
        />
        <Text style={PagesStyle.feedbackText}>{message}</Text>
        <Button color={colors.buttons} onPress={addNewTodo} title="new" />
      </View>
      <View style={PagesStyle.todosContainer}>
        <FlatList
          data={temp ? tempTodos : todos}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              updateItem={updateItem}
              deleteTodo={deleteTodo}
            />
          )}
        />
      </View>
      <View style={PagesStyle.filterContainer}>
        <TouchableOpacity style={PagesStyle.todoFilterCard} onPress={checkAll}>
          <Text style={PagesStyle.defaultText}>Check All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={PagesStyle.todoFilterCard}
          onPress={unCheckAll}
        >
          <Text style={PagesStyle.defaultText}>Uncheck All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PagesStyle.todoFilterCard} onPress={showDone}>
          <Text style={PagesStyle.defaultText}>Show Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={PagesStyle.todoFilterCard}
          onPress={showUnDone}
        >
          <Text style={PagesStyle.defaultText}>Show Undone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PagesStyle.todoFilterCard} onPress={showAll}>
          <Text style={PagesStyle.defaultText}>Show All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
