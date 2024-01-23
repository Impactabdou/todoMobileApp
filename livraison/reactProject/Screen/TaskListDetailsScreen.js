import React from "react";
import TodoList from "../components/TodoList";
// function that runders the chosen todolists items
export default function TaskListDetailsScreen({ route }) {
  const { listID } = route.params;//getting the id throw the route prop
  return <TodoList listID={listID} />;
}
