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

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
      success: ''
    };

  this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      //OPTION1 bind w/ bind(this)
      .then(this.onSignUpSuccess.bind(this))
      .catch(() => {
      //OPTION2 bind with arrow function
        this.setState({ error: 'Error processing sign up', loading: false });
      });
  }

  onSignUpSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      success: 'Congratulations! Successfully signed up'
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
            placeholder='atleast 6 characters'
            label='Password:'
            onChangeText={(text)=>this.setState({password: text})}
            value={this.state.password}/>
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <Text style={styles.successStyle}>{this.state.success}</Text>
        <CardSection >
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default SignUpForm;
