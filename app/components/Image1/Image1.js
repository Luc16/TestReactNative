import React, {Component} from 'react';
import { Text, View, AppRegistry, Image, StyleSheet, 
    TouchableHighlight, Modal, Animated, 
    Alert, Dimensions, TouchableOpacity, Easing} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

var {width, height} = Dimensions.get('window')
var imgArr = [{image:require('../../../Images/casca.jpeg')},
      {image:require('../../../Images/latinha.jpeg')},
      {image:require('../../../Images/garrafa.jpeg')}]

export default class Image1 extends Component{
    constructor(props){  
        super(props) 
        this.moveImage = new Animated.ValueXY({ 
            x: 0, 
            y: (height*0.5 - width*0.5) 
        })
        this.imageScale = new Animated.Value(0)
        this.fade = new Animated.Value(1)
        this.state = {
            backButton: false,
            modalVisible: false,
            imgIndex: 0,
            inAnimation: false,
            disable: false,
            sizeX: this.imageScale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.1]
            }),
            sizeY: this.imageScale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.1]
            })  

        }
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    setImage(img){
        this.setState({inAnimation: img})
    }
    showList = () => {
        console.log('Long Pressed')
        this.setModalVisible(true)
    }
    classify = () => {
        console.log('Classified')
        this.setState({inAnimation: true, disable: true})
        this.fade.setValue(0)
        this.movingImage()
        this.showUndo()
        setTimeout(() => {this.setState({imgIndex: (
                this.state.imgIndex+1)%3, 
                inAnimation: false, disable: false}), 
            this.movingBackImage(), this.fadeIn()},  300)
    }
    movingImage = () => {
        Animated.parallel([    
            Animated.timing(this.moveImage, {
                toValue: {x: (width*0.5 - 25), y: height*0.5}, 
                easing: Easing.ease, 
                duration: 300}),
            Animated.timing(this.imageScale, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease
            })
        ]).start()
    }
    movingBackImage = () => {
        Animated.timing(this.moveImage, 
            {toValue: {x: 0, y: (height*0.5 - width*0.5) }}).start()
        this.imageScale.setValue(0)
    }
    fadeIn = () => {
        Animated.timing(this.fade, {
            toValue: 1, 
            easing: Easing.ease, 
            duration: 200} 
            ).start()
    }
    showUndo = () => {
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
            this.setModalVisible(!this.state.modalVisible);
          }}>
                <View style={styles.onmodal}>
                    <View>
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
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.modText}>FECHAR</Text>
                    </TouchableHighlight>
                </View> 
        </Modal>
        <View>
            {!this.state.inAnimation ?
                <View style={styles.pos}>
                    <ImageZoom cropWidth={width} cropHeight={height}
                        imageWidth={width} imageHeight={width} >
                        <Animated.Image 
                            style={[styles.im1, 
                            {opacity: this.fade,
                            transform: [{
                                scale: this.fade.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.85, 1]
                            })}]}]} 
                            source={imgArr[this.state.imgIndex].image}/>
                    </ImageZoom>
                </View>
                
            :  <View style={styles.pos}> 
                    <Animated.Image 
                        style={[styles.im2, 
                        {transform: [
                            {scaleX: this.state.sizeX},
                            {scaleY: this.state.sizeY}
                        ]},
                        this.moveImage.getLayout()]} 
                        source={imgArr[this.state.imgIndex].image}/> 
                </View>
            }
        </View>
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify} disabled={this.state.disable}>
                    <View style={styles.col1}/>
                </TouchableHighlight>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify} disabled={this.state.disable}>
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
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify} disabled={this.state.disable}>
                    <View style={styles.col3}/>
                </TouchableHighlight>
                <TouchableHighlight onLongPress={this.showList} onPress={this.classify} disabled={this.state.disable}>
                    <View style={styles.col4}/>
                </TouchableHighlight>
            </View>
        </View>
    </View>
    )}
}
const styles = StyleSheet.create({
    im1: {
        width: width,
        height: width,
    },
    im2: {
        top:(height*0.5 - width*0.5),
        alignSelf: 'center',
        width: width,
        height: width,
    },
    pos: {
        justifyContent: 'center',
        alignItems: 'center',
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
        height: height*0.5,
        backgroundColor: 'red',
        opacity: 0.4
    },
    col2: {
        width: 60,
        height: height*0.5,
        backgroundColor: 'black',
        opacity: 0.4
    },
    
    col3: {
        width: 60,
        height: height*0.5,
        backgroundColor: 'blue',
        opacity: 0.4
    },
    col4: {
        width: 60,
        height: height*0.5,
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
        width: width,
        height: height*0.3,
        top: height*0.05,
        bottom: height*0.2
    },
    modal: {
        alignSelf: 'center',
        width: width,
        height: height*0.5,
        bottom: height*0.2
    },
    modText: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    }
});
AppRegistry.registerComponent('Image1', () => Image1);