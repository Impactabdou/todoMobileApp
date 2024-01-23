import React from 'react';
import  TaskListsScreen from '../Screen/TodoListsScreen';
import  TaskListDetailsScreen from '../Screen/TaskListDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../Style/Colors';
// setting the stack
const Stack = createNativeStackNavigator();

function NavigationTodo () {
  //navigate throw the lists or the details of lists
  return (
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List'  options={{
                headerTintColor: colors.headerText,
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:18,
                },
                headerStyle: { backgroundColor: colors.menu}}}
                component={TaskListsScreen} />
        <Stack.Screen name='Details' component={TaskListDetailsScreen} options={{
                headerTintColor: colors.headerText,
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize:18,
                },
                headerStyle: { backgroundColor: colors.menu}}} />
      </Stack.Navigator>
  )
}

export default NavigationTodo;
