import React, {Component} from 'react';
import { Text, View, AppRegistry, Image, StyleSheet, 
    TouchableHighlight, Modal, ScrollView, Alert, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

var imgArr = [{image:require('../../../Images/casca.jpeg')},
      {image:require('../../../Images/latinha.jpeg')},
      {image:require('../../../Images/garrafa.jpeg')}]

export default class Image1 extends Component{
  state = {
      modalVisible: false,
      imgIndex: 0
      
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  showList = () => {
      console.log('Long Pressed')
      this.setModalVisible(true)
  }
  classify = () => {
      console.log('Classified')
       this.setState({
        imgIndex: (this.state.imgIndex+1)%3
      })
  }

  render() {
    return(
    <View>
        <Modal animationType="fade" 
        transparent={true} 
        style={styles.modal}
        visible={this.state.modalVisible} 
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.onmodal}>
                <View>
                    <ScrollView>
                        <Text>Lista do tipo de lixo:</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                        <Text>lixo</Text>
                    </ScrollView>
                    <TouchableHighlight
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.modText}>FECHAR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
        <View style={styles.pos}>
        <ImageZoom cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height}
            imageWidth={360} imageHeight={360} >
            <Image style={styles.im1} source={imgArr[this.state.imgIndex].image}/>
          </ImageZoom>
        </View>
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify}>
                    <View style={styles.col1}/>
                </TouchableHighlight>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify}>
                    <View style={styles.col2}/>
                </TouchableHighlight>
            </View>
            <View style={styles.container1}>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify}>
                    <View style={styles.col3}/>
                </TouchableHighlight>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify}>
                    <View style={styles.col4}/>
                </TouchableHighlight>
            </View>
        </View>
    </View>
    )}
}
const styles = StyleSheet.create({
    im1: {
        alignSelf: 'center',
        width: 360,
        height: 360,
    },
    pos: {
        position:'absolute' 
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container1: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    col1: {
        width: 60,
        height: 320,
        backgroundColor: 'red',
        opacity: 0.4
    },
    col2: {
        width: 60,
        height: 320,
        backgroundColor: 'black',
        opacity: 0.4
    },
    
    col3: {
        width: 60,
        height: 320,
        backgroundColor: 'blue',
        opacity: 0.4
    },
    col4: {
        width: 60,
        height: 320,
        backgroundColor: 'pink',
        opacity: 0.4
    },
    onmodal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: 100,
        height: 50,
    },
    modText: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    }
});
AppRegistry.registerComponent('Image1', () => Image1);