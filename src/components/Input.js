import React from 'react';
import { View, Text , TextInput} from 'react-native';

const styles = {
  labelStyle: {
    paddingLeft: 20,
    flex: 1
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    width: 100,
    height: 50,
    color:'#000',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    flex: 2
  }

}

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry})=>{
  const {viewStyle, labelStyle, inputStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        placeholder={placeholder}/>
    </View>
  )
}

export default Input;
