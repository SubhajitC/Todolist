// components/Auth/Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { auth } from '../../../firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Handle successful registration, navigate to the main screen
    } catch (error) {
      console.error(error);
      // Handle registration error
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );

}