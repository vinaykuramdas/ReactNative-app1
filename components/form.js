import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Form extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            email :  '',
            password : '',
            errorText : '',
            visible : true,
        }
        this.pressed = this.pressed.bind(this);
    }
    pressed(){
      const Email = this.state.email; 
      const Password = this.state.password; 
      if(Email == ''){
          this.setState({
              errorText : 'please Enter Email '
          })
      }else if(Password == ''){
        this.setState({
            errorText : 'please Enter Password'
        })
      }
      else{
         
          this.setState({
              errorText : ''
          })
        //  this.fetchResponse();
        Actions.Home();
      }
   
    }

    HideSplashScreen = () => {
        this.setState({
            visible : false
        });
    }

    componentDidMount(){
        setTimeout(() => {
            this.HideSplashScreen();
        },5000);
    }

  async fetchResponse (){

    var data = {
        email : this.state.email,
        password : this.state.password
    };
    try {
     await fetch(
        "http://192.168.0.112:3000/user/login",{
            method : 'POST',
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(data)
        }
    ).then(res => res.json())
    .then((resjson) => {
       if(resjson.authcode == 200){
           Actions.Home();
       }else{
           alert("Invalid Credentials");
       }
    }) ;

    } catch(errors){
        alert(errors);
    }
   }

   renderSplashScreen = () => {
       return (
           <View >
              <Image source={require('../images/splash2.png')}  />
           </View>
       )
   }
    render(){
        return(
               <View style={styles.container}>
                  <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'Email' 
                        placeholderTextColor = '#ffffff'
                        selectionColor = '#ffffff'
                        keyboardType = 'email-address'
                        onSubmitEditing = {() => this.password.focus()}  
                        onChangeText = { (email) => this.setState({email})}   />
                   <TextInput style = {styles.inputtext} 
                      underlineColorAndroid = 'rgba(0,0,0,0)' 
                       placeholder = 'Password' 
                       secureTextEntry = {true}
                        placeholderTextColor = '#ffffff'
                        ref = {(input) => this.password = input } 
                        onChangeText = {(password) => this.setState({password})} />  
                    <TouchableOpacity style = {styles.button} onPress = {this.pressed}>
                       <Text style={styles.login}>LOGIN</Text>    
                    </TouchableOpacity>   
                    <Text style={{color:'red',fontSize:12}}>{this.state.errorText}</Text>    
                    {
                        (this.state.visible === true) ? this.renderSplashScreen() : null 
                    }
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