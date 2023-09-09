import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { auth } from '../../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login, navigate to the main screen
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}