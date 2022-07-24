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

import { Topo, Painel, Resultado } from './src/components';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor='#2196f3' barStyle='dark-content'/>
      <SafeAreaView>
        <Topo />
        <Resultado />
        <Painel />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
