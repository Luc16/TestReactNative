import React, {Component} from 'react'
import { Button, View, AppRegistry, StyleSheet, Alert} from 'react-native'
import uid from 'uuid/v1'
import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase';

export default class ImageUpload extends Component{
  saveImage = async () => {
    let result = await ImagePicker.launchCameraAsync()
    if (!result.cancelled){
      this.uploadImage(result.uri, (uid()+".jpg"))
      .then(()=>{
        Alert.alert("SUCCESS")
      }).catch((error) =>{
        Alert.alert(error.toString())
      })
    }
  }

  uploadImage = async (uri, name) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    var ref = firebase.storage().ref().child("images/" + name)
    return ref.put(blob)
  }

  render() {
    return(
    <View style={styles.container}>
      <Button title="Tirar foto" onPress={this.saveImage}/>
    </View>
    )}
}
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, alignItems: 'center'}
})
AppRegistry.registerComponent('ImageUpload', () => ImageUpload)