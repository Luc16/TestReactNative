import React, {Component} from 'react';
import { Text, View, AppRegistry, Image} from 'react-native';
import Component1 from './app/components/Component1/Component1'
import Camera1 from './app/components/Camera1/Camera1';
import Image1 from './app/components/Image1/Image1';

export default class testapp extends Component{
  state = {}
  render() {
    return(
    <View>
      <Image1 />
    </View>
    )}
}
AppRegistry.registerComponent('testapp', () => testapp);
