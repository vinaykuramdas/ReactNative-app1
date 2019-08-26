import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';


export default class SignUpForm extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            mobile : '',
            password : '',
            cPassword : '',
            error : ''
        }
        this.pressed = this.pressed.bind(this);
    }

    pressed (){

        const Name = this.state.name;
        const Mobile = this.state.mobile;
        const Password = this.state.password;
        const ConfirmPassword = this.state.cPassword;

        if(Name == ''){
          this.setState({error : 'Please Enter your Name'})
        }else if(Mobile == ''){
            this.setState({error : 'Please Enter your Mobile Number'})
        }else if(Password == ''){
            this.setState({error : 'Password is Required'})
        }else if(ConfirmPassword == ''){
            this.setState({error : 'Confirm Password must required'})
        }else if(Password != ConfirmPassword){
             this.setState({error : 'password and Confirm password should Match'})
        }else {
            this.setState({error : ''})
        }
          
    }  
    render(){
        return(
            <View style={styles.container}>
                <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'Name' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        onSubmitEditing = {() => this.email.focus()}  
                        onChangeText = { (name) => this.setState({name})}   />
                <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'Email' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        keyboardType = 'email-address'
                        ref = {(input) => this.email = input}
                        onSubmitEditing = {() => this.mobile.focus()}  
                        onChangeText = { (email) => this.setState({email})}   />    
                <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'MobileNumber' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        keyboardType = 'number-pad'
                        ref = {(input) => this.mobile = input}
                        onSubmitEditing = {() => this.password.focus()}  
                        onChangeText = { (mobile) => this.setState({mobile})}   />  
                <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'Password' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        secureTextEntry = {true}
                        ref = {(input) => this.password = input}
                        onSubmitEditing = {() => this.Cpassword.focus()}  
                        onChangeText = { (password) => this.setState({password})}   /> 
                <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'ConfirmPassword' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        secureTextEntry = {true}
                        ref = {(input) => this.Cpassword = input} 
                        onChangeText = { (cPassword) => this.setState({cPassword})}   />  
                 <TouchableOpacity style = {styles.button} onPress = {this.pressed}>
                       <Text style={styles.login}>SignUp</Text>    
                 </TouchableOpacity>     
                 <Text style={{color:'red',fontSize:12}}>{this.state.error}</Text>                         
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputtext : {
        width : 300,
        backgroundColor : 'rgba(255,255,255,0.3)',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        color : '#ffffff',
        marginVertical : 10
        
    },
    login : {
        fontSize : 16,
        fontWeight : '500',
        color : '#ffffff',
        textAlign : 'center'
    },
    button : {
        backgroundColor : '#1c313a',
        width : 300 , 
        paddingVertical : 8,
        marginVertical : 16

    }
})