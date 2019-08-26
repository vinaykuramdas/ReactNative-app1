import React,{Component} from 'react';
import {Text,View,TouchableHighlight,StyleSheet,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CardView from 'react-native-cardview';
import TabNavigator from '../pages/tabnavigator';

export default class About extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 0,
            carouselItems : [
                {
                    title:'Building',
                    image :require('../images/school.jpg')
                },
                {
                    title : 'Students',
                    image :require('../images/school1.jpg')
                },
                {
                    title : 'Library',
                    image :require('../images/school2.jpg')
                }
            ]
        }
    }
    _renderItem({item,Index}){
        return(
            <View>
                <CardView style = {{backgroundColor:'#FFB6C1',width:400,height:250}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                <Image source={item.image} />
                <Text style={{fontSize:24,color:'green',paddingLeft:105,fontStyle:'italic'}}>{item.title}</Text>
                </CardView>
            </View>
        )
    }

    render(){
        return (
            <View>
            <CardView style={{backgroundColor:'#ffffff',width:410,height:200,marginBottom:80}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10}>
                <Text>This is a card from the react-native-elements</Text>
            </CardView>
            <SafeAreaView style={style.container}>
                <View>
                    <TouchableHighlight onPress={ () => this.Carousel._snapToItem(this.state.activeIndex+1)} style={style.Arrow}>
                        <Image source={require('../images/left.png')} />
                    </TouchableHighlight>
                </View>
                 <Carousel 
                     ref = {ref => this.Carousel = ref}
                     data = {this.state.carouselItems}
                     sliderWidth = {250}
                     itemWidth = {250}
                     renderItem = {this._renderItem}
                     onSnapToItem = {index => this.setState({activeIndex:index})}
                 />
                 <View>
                    <TouchableHighlight onPress={ () => this.Carousel._snapToItem(this.state.activeIndex-1)} style={style.Arrow}>
                        <Image source={require('../images/right.png')} />
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
            </View>
        )
    }
}
  

const style = StyleSheet.create({
    container : {
        flexDirection:'row',
        
    },
    Arrow : {
        marginTop:120
    },
    
})