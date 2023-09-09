import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(task) => task.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Button title="Delete" onPress={() => onDelete(item.id)} />
          {!item.completed && (
            <Button title="Complete" onPress={() => onComplete(item.id)} />
          )}
        </View>
      )}
    />
  );
}