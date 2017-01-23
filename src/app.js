/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
} from 'react-native';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import Spinner from './components/Spinner';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    flex: 1
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    position: 'relative',
    zIndex: 100
  },
  imageStyle: {
    borderRadius: 125,
    width: 250,
    height: 250,
    marginTop: 15,
    marginBottom: 15
  },
  buttonStyle: {
    backgroundColor: 'white'
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: null,
      wantsToSignUp: false
    }
  }

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyA9o5QTKlHLrEmvNox2ShPBnfyggKeadpo",
      authDomain: "auth-f94dd.firebaseapp.com",
      databaseURL: "https://auth-f94dd.firebaseio.com",
      storageBucket: "auth-f94dd.appspot.com",
      messagingSenderId: "110628874115"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({isLogged: true });
      } else {
        this.setState({isLogged: false });
      }
    });
  }

  SignUp(){
    const { wantsToSignUp } = this.state;
    if(wantsToSignUp) {
      return <SignUpForm />
    }
  }

  SignedUpCheck(){
    const { isLogged } = this.state;
    if(!isLogged) {
      return (
        <View >
          <Button
          onPress={()=>!this.state.wantsToSignUp ? this.setState({ wantsToSignUp: true }) : this.setState({ wantsToSignUp: false }) }
           title='Sign Up?'/>
        </View>
      );
    }
  }

  isLogged(){
    switch(this.state.isLogged) {
      case true:
        return <Button title='Log Out' onPress={()=>firebase.auth().signOut()}/>
      case false:
        return (
          <View>
            <View style={{ marginLeft: 60 }}>
              <Image source={require('./assets/images/welcomeback.gif')} style={styles.imageStyle}/>
            </View>
            <View>
              <LoginForm />
            </View>
          </View>
        );
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <ScrollView style={styles.viewStyle}>
          <Header title='Authorization' />
          {this.isLogged()}
          {this.SignedUpCheck()}
          {this.SignUp()}
      </ScrollView>
    );
  }
}

export default App;
