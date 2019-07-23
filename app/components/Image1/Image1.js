import React, {Component} from 'react';
import { Text, View, AppRegistry, Image, StyleSheet, 
    TouchableHighlight, Modal, ScrollView, 
    Alert, Dimensions, TouchableOpacity} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

var imgArr = [{image:require('../../../Images/casca.jpeg')},
      {image:require('../../../Images/latinha.jpeg')},
      {image:require('../../../Images/garrafa.jpeg')}]

export default class Image1 extends Component{
  state = {
      backButton: false,
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
      this.showBack()
  }
  showBack = () => {
    this.setState({backButton: true})
    setTimeout(() => {this.setState({backButton: false})}, 2000)
  }
  goBack = () => {
    console.log('Classified')
    if (this.state.imgIndex > 0){
        this.setState({
            imgIndex: (this.state.imgIndex-1)%3
          })
    }  
}

  render() {
    return(
    <View>
        <Modal animationType="fade" 
        transparent={true} 
        visible={this.state.modalVisible} 
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.onmodal}>
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
        </Modal>
        <View style={styles.pos}>
        <ImageZoom cropWidth={Dimensions.get('window').width} cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width} imageHeight={Dimensions.get('window').width} >
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
           <View style={styles.container2}>
           {this.state.backButton ? 
                <TouchableOpacity onPress={this.goBack}>
                     <Text style={styles.back}>Undo</Text>
                </TouchableOpacity>
            : null}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
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
    container2: {
        alignSelf: 'flex-end',
        height:50, 
        width:240, 
    },
    col1: {
        width: 60,
        height: Dimensions.get('window').height*0.5,
        backgroundColor: 'red',
        opacity: 0.4
    },
    col2: {
        width: 60,
        height: Dimensions.get('window').height*0.5,
        backgroundColor: 'black',
        opacity: 0.4
    },
    
    col3: {
        width: 60,
        height: Dimensions.get('window').height*0.5,
        backgroundColor: 'blue',
        opacity: 0.4
    },
    col4: {
        width: 60,
        height: Dimensions.get('window').height*0.5,
        backgroundColor: 'pink',
        opacity: 0.4
    },
    back: {
        justifyContent:'center', 
        alignSelf: 'center', 
        fontSize: 30
    },
    onmodal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.3,
        top: Dimensions.get('window').height*0.1,
        bottom: Dimensions.get('window').height*0.2
    },
    modal: {
        alignSelf: 'center',
        top: Dimensions.get('window').height*0.1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.5,
        bottom: Dimensions.get('window').height*0.2
    },
    modText: {
        bottom: Dimensions.get('window').height*0.15,
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    }
});
AppRegistry.registerComponent('Image1', () => Image1);