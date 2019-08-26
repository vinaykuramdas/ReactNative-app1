import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Icon} from 'react-native-elements';


export default class Profile extends Component<{}>{
    render(){
        return(
          <View style={styles.container}>
             <View style={styles.header}></View>
                <Image style={styles.avatar} source= {require('../images/prof_avatar.png')} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                    <Text style={styles.name}>Vinay Kuramdas</Text>
                    <Text style={styles.info}>MEAN Stack / JAVA Developer</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                    
                </View>
               
             </View>
                 <View style={{display:'flex',flexDirection:'row',marginTop:120,borderRadius:10}}>
                        <Icon name='phone' type='font=awesome' color='#455a64' size={42} />
                        <View style={{display:'flex',flexDirection:'column',marginLeft:60}}>
                            <Text style={{fontSize:16,color:'#696969'}}>Parent Mobile No</Text>
                            <Text style={{fontSize:20,color:'#696969'}}>9963******</Text>
                        </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                    <Text style={{fontSize:24,color:'#696969'}}>Status : </Text>
                    <Text style={{fontSize:20,backgroundColor:'green',color:'white',marginLeft:40}}>Active</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#455a64",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
})