import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'rgba(46, 138, 138, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.5,
    position: 'relative',
    zIndex: 1000,
    //android only
    elevation: 1.5,
  },
  textStyle: {
    fontSize: 25,
    fontFamily: 'times new roman',
    color: 'white',
    fontWeight: 'bold'
  }
})

const Header = (props) => {
  const { viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
          {props.title}
      </Text>
    </View>
  )
}

export default Header;
