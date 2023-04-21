import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Routes } from './src/routes';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar />
      <Routes />
    </View>
  );
}
