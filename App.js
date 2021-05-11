import React, {Component} from 'react'
import { Button, View, AppRegistry, StyleSheet, Alert} from 'react-native'
import Component1 from './app/components/Component1/Component1'
import Camera1 from './app/components/Camera1/Camera1'
import Image1 from './app/components/Image1/Image1'
import ImageUpload from './app/components/ImageUpload/ImageUpload'
import firebaseDef from './app/components/Defaults/firebaseDef'
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase';

export default class testapp extends Component{
  constructor(props){
    super(props)
    const firebaseConfig = {
    }
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return(
    <View style={styles.container}>
      <ImageUpload/>
    </View>
    )}
  }
const styles = StyleSheet.create({
  container: {flex: 1}
})
AppRegistry.registerComponent('testapp', () => testapp)
