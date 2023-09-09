import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, markTaskCompleted } from '../redux/actions'; // Assuming you have task-related actions

const HomeScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // Assuming you have a tasks reducer
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    // Validate and add a new task
    if (!taskTitle) {
      // Handle validation error
      return;
    }

    // Dispatch add task action
    dispatch(addTask({ title: taskTitle, completed: false }));

    // Clear the input field
    setTaskTitle('');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <View>
        <Text>Add Task</Text>
        <TextInput
          placeholder="Task Title"
          onChangeText={(text) => setTaskTitle(text)}
          value={taskTitle}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
            {!item.completed && (
              <Button title="Complete" onPress={() => dispatch(markTaskCompleted(item.id))} />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;