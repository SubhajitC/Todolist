import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TaskItem({ task, onDelete, onComplete }) {
  return (
    <View>
      <Text>{task.title}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
      {!task.completed && (
        <Button title="Complete" onPress={() => onComplete(task.id)} />
      )}
    </View>
  );
}