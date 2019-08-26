import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Logo extends Component<{}>{
    render(){
        return(
               <View style={styles.container}>
                   <Image source={{uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/37/letter-146016_960_720.png'}}
                          style={{width: 50, height: 70}} />
                    <Text style = {styles.logoText}>Welcome!!</Text>      
               </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    logoText : {
        marginVertical : 20,
        fontSize:18,
        color : 'rgba(255,255,255,0.7)'
    }
})