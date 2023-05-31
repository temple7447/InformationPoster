import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
} from 'react-native';
import axios from 'axios';

const TextInputExample = () => {
  const [titleValue, settitleValue] = useState('');
  const [contentValue, setcontentValue] = useState('');
  const [dateValue, setdateValue] = useState('');
  const [themeValue, setthemeValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDailySubmit = () => {
    setIsLoading(true);
    setError(null);
    axios
      .post('https://general-nuyw.onrender.com/dailydevotional', {
        titleValue,
        contentValue,
        dateValue,
        themeValue,
      })
      .then((res) => {
        console.log(res.data);
        Alert.alert('Success!', 'It was sent');
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <SafeAreaView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setdateValue(text)}
            value={dateValue}
            placeholder="Enter date"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setthemeValue(text)}
            value={themeValue}
            placeholder="Enter theme"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => settitleValue(text)}
            value={titleValue}
            placeholder="Enter title"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textarea}
            onChangeText={(text) => setcontentValue(text)}
            value={contentValue}
            multiline={true}
            placeholder="Enter content"
          />
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleDailySubmit} />
          </View>
        )}
        {error && <Text style={styles.error}>Something went wrong. Please try again later.</Text>}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default TextInputExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
