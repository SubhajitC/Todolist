import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/action';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        // Handle validation error
        return;
      }
  
      const userData = {
        email,
        password,
      };
  
      console.log('Attempting registration...'); // Add this log
  
      const user = await dispatch(registerUser(userData));
  
      console.log('User data after registration:', user); // Add this log
  
      if (user) {
        // Handle successful registration
        console.log('Registration successful:', user); // Log success message to console
        alert('Registration successful'); // Display alert message
      } else {
        // Handle registration failure, show an error message, etc.
      }
    } catch (error) {
      // Handle API request error
      console.error('Registration error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default RegisterScreen;