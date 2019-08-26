import React,{Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import HomeDrawer from '../components/sideDrawer';


export default class TabNavigator extends Component<{}> {
    render(){
        return(
            createBottomTabNavigator({
                Home : HomeDrawer,
                Back : HomeDrawer
            })
        )
    }
}