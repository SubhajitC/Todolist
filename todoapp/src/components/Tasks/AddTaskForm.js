import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddTaskForm({ onAdd }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() === '') {
      // Handle empty task title
      return;
    }

    onAdd(taskTitle);
    setTaskTitle('');
  };

  return (
    <View>
      <Text>Add Task</Text>
      <TextInput
        placeholder="Task Title"
        onChangeText={(text) => setTaskTitle(text)}
        value={taskTitle}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}