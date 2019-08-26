import React,{Component} from 'react';
import {Text,View,TouchableHighlight,StyleSheet,Image,TouchableOpacity,Linking} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import {Icon} from 'react-native-elements';
import CardView from 'react-native-cardview';



export default class HomeDrawer extends Component<{}>{

    constructor(props){
        super(props);
        this.state = {drawerOpen : null}
        this.logout = this.logout.bind(this);
        this.help = this.help.bind(this);
    }

    renderSideContent = () => {
        return (
            <View style = {styles.sideContainer}>
              <View style={styles.side1}>
                <Image  source={require('../images/ava.png')} />
                <Text style={{fontSize:22,color:'#ffffff',fontStyle:'italic',marginTop:23,marginLeft:10}}>VINAY GUPTA</Text>
              </View>
              <View style={styles.side2}>  
               <TouchableOpacity style={styles.drawer}><Icon name='home' type='font-awesome' color='purple' size = {32} /><Text style={{fontSize:24,color:'purple',paddingLeft:30,fontStyle:'italic'}}>Home</Text></TouchableOpacity>
               <TouchableOpacity  style={styles.drawer} onPress={this.About}><Icon name='address-card' type='font-awesome' color='purple' size = {32} /><Text style={{fontSize:24,color:'purple',paddingLeft:25,fontStyle:'italic'}}>About Us</Text></TouchableOpacity>
               <TouchableOpacity  style={styles.drawer}><Icon name='phone' type='font-awesome' color='purple' size = {32} /><Text style={{fontSize:24,color:'purple',paddingLeft:30,fontStyle:'italic'}}>Contact Us</Text></TouchableOpacity>
               <TouchableOpacity  style={styles.drawer} onPress = {this.logout}><Icon name='sign-out' type='font-awesome' color='purple' size = {32} /><Text style={{fontSize:24,color:'purple',paddingLeft:30,fontStyle:'italic'}}>Log Out</Text></TouchableOpacity>
              
               </View>
               <View style={{paddingTop:80}}>
                  <Image  source={require('../images/logo.png')} />
               </View>
            </View>
        )
    }
   
    logout () {
       Actions.Login();
    }

    About () {
       Actions.About();
    }
    
    help () {
       Actions.Help();
    }

    Calendar () {
       Actions.Calendar();
    }

    holiday () {
       Actions.Holiday();
    }

    profile () {
       Actions.Profile();
    }

    render(){
        return(
            <Drawer 
              open = {this.state.drawerOpen}
              content = {this.renderSideContent()}
              type = "overlay"
              tapToClose = {true}
              openDrawerOffset = {0.3}
              panCloseMask = {0.3}
              closedDrawerOffset = {-3}
              panOpenMask = {0.70}
              captureGestures = "open"
              acceptPan = {false}
              onClose = {() => {this.setState({drawerOpen : false});}}>

                  <View style ={{display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#ffffff'}}>
                      <TouchableHighlight
                         onPress = {() => {this.setState({drawerOpen : true });}}>
                            <Image  source={require('../images/ham.png')} />
                         </TouchableHighlight>
                         <Text style={{color:'purple',fontSize:18}}>
                            SMART APP
                        </Text>
                        <TouchableHighlight
                         onPress = {this.logout}>
                            <Image  source={require('../images/logout.png')} />
                         </TouchableHighlight>

                  </View>

                  <View  style={{backgroundColor:'#455a64',flex:1}}>
                      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:10}} source={require('../images/attendance.png')}  />
                            </CardView>
                            <Text style={{marginLeft:10,marginTop:10}}>My Attendance </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100,height:80}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{margin:5,marginLeft:10}} source={require('../images/books.png')}  />
                            </CardView>
                            <Text style={{marginLeft:15,marginTop:10}}>My books </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:5}} source={require('../images/resuts.png')}  />
                            </CardView>
                            <Text style={{marginLeft:10,marginTop:10}}>My Results </Text>
                         </TouchableOpacity>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:110}}>
                         <Image  source={require('../images/attendance.png')} />
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}} onPress={this.profile}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:10}} source={require('../images/profile.png')}  />
                            </CardView>
                            <Text style={{marginLeft:10,marginTop:10}}>My Profile </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}} onPress={this.holiday}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:20}} source={require('../images/holidays.png')}  />
                            </CardView>
                            <Text style={{marginLeft:10,marginTop:10}}>My Holidays </Text>
                         </TouchableOpacity>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:110}}>
                          <TouchableOpacity style={{display:'flex',flexDirection:'column'}} onPress = {this.Calendar}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100,height:90}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:5}} source={require('../images/Calendar.jpg')}  />
                            </CardView>
                            <Text style={{marginLeft:5,marginTop:10}}>School Calendar </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}} onPress={() => {Linking.openURL('https://paytm.com')}}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100,height:90}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:5}} source={require('../images/fee.png')}  />
                            </CardView>
                            <Text style={{marginLeft:15,marginTop:10}}>Pay Fee </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{display:'flex',flexDirection:'column'}} onPress = {this.help}>
                            <CardView style = {{backgroundColor:'#ffffff',width:100}} cardElevation={10} cardMaxElevation={10} cornerRadius = {10} >
                            <Image style={{marginLeft:10}} source={require('../images/help.png')}  />
                            </CardView>
                            <Text style={{marginLeft:15,marginTop:10}}>My Help </Text>
                         </TouchableOpacity>
                      </View>
                  </View>
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    sideContainer : {
        backgroundColor : '#ffffff',
        flex : 1
    },
    side1:{
        backgroundColor:'#56A5EC',
        height : 120,
        display:'flex',
        flexDirection:'row',
        paddingTop:15
    },
    side2 : {
        justifyContent : 'center'
    },
    drawer : {
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        borderBottomWidth:2,
        borderRadius:2,
        borderBottomColor:'#ddd'
    }
})