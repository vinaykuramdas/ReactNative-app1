import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../pages/logo';
import SignUpForm from '../components/signupForm';

export default class SignUp extends Component<{}>{
    signIn(){
        Actions.pop();
    }
    render(){
        return(
               <View style={styles.container}>
                   <Logo />
                   <SignUpForm />
                  <View style={styles.SignupCon}>
                      <Text style={styles.signUpText}>Already have an account? </Text>
                      <TouchableOpacity onPress = {this.signIn}><Text style={styles.signUpBut}>SignIn!!</Text></TouchableOpacity>
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