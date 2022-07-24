/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Calculadora } from './src/components';

const App = () => {
  return (
    <Calculadora />
  );
};

const styles = StyleSheet.create({
});

export default App;
