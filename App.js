import 'react-native-gesture-handler';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import { SafeAreaView } from 'react-native';

import App from './src';  

export default function Main() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <App />
    </SafeAreaView>
  )
}