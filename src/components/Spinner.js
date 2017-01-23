import React from 'react';
import { View , ActivityIndicator} from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size='large'/>
    </View>
  );
}

export default Spinner;
