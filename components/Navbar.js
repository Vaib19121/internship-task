import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Heading() {
  return (
    <View style={{ display:'flex', flexDirection:'row',paddingTop:35,backgroundColor:'white'}}>
      <Ionicons name='arrow-back' size={25} style={{paddingHorizontal:18}} />
      <Text style={{paddingLeft:120, fontSize:22, fontWeight:'600'}}>Sign Up</Text>
    </View>
  )
}