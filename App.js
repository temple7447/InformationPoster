import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import TextInputExample from './Component/Daily';
import axios from 'axios';
import UploadMusicScreen from './Component/UploadMusic';
export default function App() {
  return (
    <View style={styles.container}>
 <TextInputExample />
 <UploadMusicScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
