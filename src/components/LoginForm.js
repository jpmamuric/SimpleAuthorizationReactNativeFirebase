import React from 'react';
import firebase from 'firebase';

import { TextInput, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';

const styles = {
  errorStyle: {
    color: 'rgba(205, 0, 0, 0.6)',
    alignSelf: 'center',
    fontSize: 20,
  },
  successStyle: {
    color: 'rgba(0, 165, 0, 0.7)',
    alignSelf: 'center',
    fontSize: 20
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      success: ''
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onSignInSuccess.bind(this))
      .catch(() => {
        this.setState({ error: 'Please try again', loading: false });
      });

  }

  onSignInSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      success: 'Successfully signed in'
    });
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner />
    } else {
      return <Button onPress={this.onButtonPress}>Sign Up</Button>
    }
  }

  render(){
    return (
      <Card>
          <CardSection>
            <Input
              placeholder='user@email.com'
              label='Email:'
              onChangeText={(text)=>this.setState({email: text})}
              value={this.state.email}/>
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder='password'
              label='Password:'
              onChangeText={(text)=>this.setState({password: text})}
              value={this.state.password}/>
          </CardSection>
          <Text
            style={styles.errorStyle}>{this.state.error}
          </Text>
          <Text
            style={styles.successStyle}>{this.state.success}
          </Text>
          <CardSection >
            <Button onPress={this.onButtonPress}>Login</Button>
          </CardSection>



      </Card>
    );
  }
}

export default LoginForm;
