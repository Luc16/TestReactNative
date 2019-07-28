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
      authDomain: "testapp-16d9b.firebaseapp.com",
      databaseURL: "https://testapp-16d9b.firebaseio.com",
      projectId: "testapp-16d9b",
      storageBucket: "testapp-16d9b.appspot.com",
      messagingSenderId: "1086886942192",
      appId: "1:1086886942192:web:8c1a9cc992d29ba7"
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
