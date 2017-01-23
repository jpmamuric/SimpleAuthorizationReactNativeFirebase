import React from 'react';

import { View } from 'react-native';

const styles = {
  viewStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}

const CardSection = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}
 export default CardSection;
