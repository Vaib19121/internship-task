import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons} from '@expo/vector-icons'

export default function CustomButton() {
  return (
    <TouchableOpacity style={{backgroundColor:'#fa892d',height:42,alignSelf:'center',borderColor:'#fff',borderWidth:2,borderRadius:20,marginTop:5,width:250,flexDirection:'row',justifyContent:'center'}}>
        <EvilIcons name='arrow-up' size={40} color='#fff' style={{marginLeft:-10, paddingVertical:5}}/>
        <Text style={{color:'#fff',fontSize:18,alignSelf:'center',paddingVertical:5}}>UPLOAD FILE</Text>
    </TouchableOpacity>
  )
}