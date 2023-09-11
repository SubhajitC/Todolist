import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/action';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        console.log('Validation error: Email and password are required.'); // Add this line for validation check
        return;
      }
  
      const userData = {
        email,
        password,
      };
  
      console.log('Attempting to log in with userData:', userData); // Add this line to log userData
  
      const user = await dispatch(loginUser(userData));
  
      console.log('Login response:', user); // Add this line to log the user response
  
      if (user) {
        console.log('User successfully logged in:', user); // Add this line to check if user is logged in
        navigation.navigate('Home');
      } else {
        console.log('Login failed: User is not logged in.'); // Add this line for login failure
        // Handle login failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Login error:', error); // Add this line to log API request errors
      // Handle API request error
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
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

export default LoginScreen;