import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default class Holiday extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                 <Text style={{color:'red',borderBottomColor:'red',borderBottomWidth:5,fontSize:30,fontStyle:'italic'}}>HOLIDAY LIST</Text>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>January-15</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Pongal</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>March-13</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Ugadi</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>August-15</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>IndependenceDay</Text>
                    </View>
                   
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>August-15</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>IndependenceDay</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>September-24</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Ganesh Chaturdi</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>October-02</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>GandhiJayanthi</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>October-15</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Dussehra</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>November-09</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Diwali</Text>
                    </View>
                    <View style={{borderBottomWidth:4,borderBottomColor:'orange',elevation:15,backgroundColor:'white'}}>
                        <Text style={{color:'blue',fontSize:25,paddingLeft:15}}>December-25</Text>
                        <Text style={{color:'blue',fontWeight:'bold',paddingLeft:15}}>Chirstmas</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        display : 'flex',
        flexGrow : 1
    }
})