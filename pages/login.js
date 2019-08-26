import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../pages/logo';
import Form from '../components/form';

export default class Login extends Component<{}>{
    signUp () {
       Actions.register();
    }
    render(){
        return(
               <View style={styles.container}>
                   <Logo />
                   <Form />
                  <View style={styles.SignupCon}>
                      <Text style={styles.signUpText}>Don't have an account yet? </Text>
                      <TouchableOpacity onPress = {this.signUp}><Text style={styles.signUpBut}>SignUp!!</Text></TouchableOpacity>
                  </View> 
               </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#455a64',
    },
    SignupCon: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row'
    },
    signUpText :{
        color: 'rgba(255,255,255,0.6)',
        fontSize : 16
    },
    signUpBut : {
        color : '#ffffff',
        fontSize : 16,
        fontWeight : '500'
    }
})