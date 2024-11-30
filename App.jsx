/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";

function App() {
    let [tasks, setTasks] = useState([
            "Do laundry",
            "Go to gym",
            "Walk dog"
        ]);
  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks} />
      <ToDoForm/>
    </SafeAreaView>
  );
}

export default App;
