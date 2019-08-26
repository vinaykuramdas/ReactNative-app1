import React,{Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';

import Login from '../pages/login';
import SignUp from '../pages/signUp';
import HomeDrawer from '../components/sideDrawer';
import About from '../components/About';
import Help from '../pages/help';
import Cal from '../pages/calendar';
import Holiday from '../pages/holiday';
import Profile from '../pages/profile';

export default class Routing extends Component<{}>{
    render(){
        return(
              <Router>
                  <Stack key='root' hideNavBar = {true}>
                         <Scene key='Login' component={Login} title='Login' initial />
                         <Scene key='register' component = {SignUp} title = 'Register' />
                         <Scene key='Home' component = {HomeDrawer} title='Home' />
                         <Scene key='About' component = {About} title='About' />
                         <Scene key='Help' component = {Help} title='Help' />
                         <Scene key='Calendar' component = {Cal} title='Calendar' />
                         <Scene key='Holiday' component = {Holiday} title='Holiday' />
                         <Scene key='Profile' component = {Profile} title='Profile' />

                  </Stack>
              </Router>
        );
    }
}