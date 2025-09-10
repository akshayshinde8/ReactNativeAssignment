import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Incomplete', 'Please enter both Email and Password');
      return;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 6 characters long',
      );
      return;
    }

    Alert.alert('Login Success', `Email: ${email}`);
    navigation.navigate('MyTabs');
  };

  const handleGuest = () => {
    Alert.alert('Guest Login', 'You are logged in as Guest');
    navigation.navigate('MyTabs');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipBtn} onPress={handleGuest}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={22}
            color={showPassword ? '#007AFF' : '#666'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottomText}>
        <Text style={styles.footerText}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Trial Only',
              'This is just for trial purpose. Simply login, it will take you to Home Screen.',
            );
          }}
        >
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  skipBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
  },
  eyeIcon: {
    padding: 5,
  },
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  signup: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
