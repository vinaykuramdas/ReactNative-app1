import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Calendar,Agenda} from 'react-native-calendars';
import CardView from 'react-native-cardview';


export default class Cal extends Component<{}> {

    render() {
        return (
            <View style={{backgroundColor:'#455a64',display:'flex',flexGrow:1}}>
                <View>
                    <Calendar 

                    markedDates = {{
                        '2019-08-16' : {startingDay:true,color:'green',textColor:'white'},
                        '2019-08-17' : {selected:true,color:'green',textColor:'white'},
                        '2019-08-18' : {selected:true,color:'green',endingDay:true,textColor:'white'}
                        

                    }}

                    markingType = {'period'}
                    
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    
                    />
                </View>
                <View style={{marginTop:10}}>
                    <CardView style = {{backgroundColor:'#ffffff',width:500,height:300}} cardElevation={10} cardMaxElevation={10} >
                        <Text style={{fontSize:25}}>Legend</Text>
                        <View style={{flexDirection:'row',paddingTop:10}}>
                            <View style={{width:15,height:15,backgroundColor:'green'}} />
                            <Text style={{paddingLeft:10,fontSize:15,color:'black'}}>Exams</Text>
                        </View>
                    </CardView>
                    
                </View>
            </View>
        )
    }
}

