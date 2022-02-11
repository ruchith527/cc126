import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import renderApplication from 'react-native-web/dist/cjs/exports/AppRegistry/renderApplication';
import PickImage from "./screens/camera";
export default class App extends React.Component{
  render() {
    return (
      <PickImage/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
