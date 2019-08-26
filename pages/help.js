import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class Help extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <View style={{paddingLeft:20,borderRadius:5,borderBottomWidth:2,borderBottomColor:'white',elevation:10,backgroundColor:'#1f5533'}}>
                    <Text style={{color:'white',fontSize:25}}>TollFree Number (24 * 7)</Text>
                    <Text style={{color:'white',fontWeight:'bold'}}>+1800 233 233</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={{color:'white',fontSize:25}}>Reception (24 * 7)</Text>
                    <Text style={{color:'white',fontWeight:'bold'}}>+1800 233 233</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={{color:'white',fontSize:25}}>Landline 1</Text>
                    <Text style={{color:'white',fontWeight:'bold'}}>+1800 233 233</Text>
                </View>
                <View style={styles.textStyle}>
                    <Text style={{color:'white',fontSize:25}}>Landline 2</Text>
                    <Text style={{color:'white',fontWeight:'bold'}}>+1800 233 233</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        paddingTop:15,
        display:'flex',
        flexGrow:1
    },
    textStyle : {
        paddingLeft:20,
        borderRadius:5,
        borderBottomWidth:2,
        borderBottomColor:'white',
        elevation:10,
        backgroundColor:'#1f5533',
        paddingTop:10
    }
})