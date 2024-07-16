import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ButtonProps{
    onPress:()=>void;
    title?: string;
    textStyles?: string;
    containerStyles?: string;

}

const Button = ({onPress, title, textStyles = "", containerStyles=""}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
     style={{backgroundColor:'#ef9d1f', borderRadius:20, justifyContent:'center'}}
    onPress={onPress}
    >
      <Text style={{fontSize:600}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button