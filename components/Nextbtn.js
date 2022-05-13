import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Nextbtn() {
  return (
    <TouchableOpacity style={{backgroundColor:'#fff',height:42,alignSelf:'center',marginTop:20,borderColor:'#fff',borderWidth:2,borderRadius:20,width:250,flexDirection:'row',justifyContent:'center'}}>
    <Text style={{color:'black',fontSize:18,alignSelf:'center',paddingVertical:5}}>NEXT</Text>
</TouchableOpacity>
  )
}