import React, {Component} from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class Component1 extends Component{
    constructor(props){
        super(props)
        this.state = {count1: 0,
        count2: 0,
        count3: 0}
    }
    onPress1 = () => {
        console.log('Button 1 Pressed')
        this.setState({
          count1: this.state.count1+1
        })
    } 
    onPress2 = () => {
        console.log('Button 2 Pressed')
        this.setState({
          count2: this.state.count2+1
        })
    } 
    onPress3 = () => {
        console.log('Button 3 Pressed')
        this.setState({
          count3: this.state.count3+1
        })
    }    
    render(){
        return (
        <View>
            <View style = {styles.myView}>
            <Text style = {styles.myText}>{this.props.message}</Text>
            </View>
            <View style = {styles.container}> 
                <TouchableHighlight  style = {styles.v1} onPress={this.onPress1} underlayColor={"blue"}>
                <View>
                    <Text>Button1</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight  style = {styles.v2} onPress={this.onPress2} underlayColor={"blue"}>
                <View>
                    <Text>Button2</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight  style = {styles.v3} onPress={this.onPress3} underlayColor={"blue"}>
                <View>
                    <Text>Button3</Text>
                </View>
                </TouchableHighlight>
            </View>
            <View style = {styles.container}>
                <View style = {styles.c1}>
                    <Text style = {styles.countText1}> { this.state.count1}</Text>
                </View>
                <View style = {styles.c2}>
                    <Text style = {styles.countText2}> { this.state.count2}</Text>
                </View>
                <View style = {styles.c3}>
                    <Text style = {styles.countText3}> { this.state.count3}</Text>
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    myView:  {backgroundColor: 'blue'},
    myText: {color: 'white'},
    container: {flexDirection: 'row', height: 100},
    v1: {flex: 1, backgroundColor: 'red', padding: 10},
    v2: {flex: 1, backgroundColor: 'green', padding: 10},
    v3: {flex: 1, backgroundColor: 'pink', padding: 10},
    countContainer: { flexDirection: 'row', height: 100},
    c1: {flex: 1, padding: 10},
    c2: {flex: 1, padding: 10},
    c3: {flex: 1, padding: 10},
    countText1: {color: 'red'},
    countText2: {color: 'green'},
    countText3: {color: 'pink'}
});
AppRegistry.registerComponent('Component1', () => Component1);
