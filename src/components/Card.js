import React from 'react';
import { Image , Text, View} from 'react-native';

const styles = {
  viewStyle: {
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    margin: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  }
}

const Card = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}

export default Card;
