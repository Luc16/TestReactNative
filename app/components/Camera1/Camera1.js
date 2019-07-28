import React, {Component} from 'react';
import { Text, View, TouchableOpacity, AppRegistry, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as firebase from 'firebase'
//import RNFetchBlob from 'react-native-fetch-blob'
const firebaseConfig = {
  apiKey: "AIzaSyCAkhjtBGz7fbqJJLVey7UBngCraOZ_ffQ",
  authDomain: "testapp-16d9b.firebaseapp.com",
  databaseURL: "https://testapp-16d9b.firebaseio.com",
  projectId: "testapp-16d9b",
  storageBucket: "testapp-16d9b.appspot.com",
  messagingSenderId: "1086886942192",
  appId: "1:1086886942192:web:8c1a9cc992d29ba7"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export default class Camera1 extends Component{
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  async press() {
    console.log('Button Pressed');
    if (this.camera) {
        console.log('Taking photo');
        let photo = await this.camera.takePictureAsync();
        console.log(photo);
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {this.camera = ref;}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
              </View>
              <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                  }}
                  onPress= {this.press.bind(this)}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flop </Text>
                </TouchableOpacity>
            </View>
            <View>
              <Image source={{uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Ftestapp-b97ff541-424a-4b03-a519-bf93aa15ebd9/Camera/f1d7e385-b0e7-42f4-afc4-b43cd4f84bf9.jpg' }} style={{ width: 400, height: 500}}></Image>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
AppRegistry.registerComponent('Camera1', () => Camera1);
