import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class SignupComponent extends React.Component {
  state = {
    borderColor: null,
  };

  _onFocus = value => () => {
    this.setState({borderColor: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.text}>Sign up with Email and Password</Text>
        <View style={styles.action}>
          <View
            style={[
              styles.section,
              {
                borderColor:
                  this.state.borderColor === 'email' ? '#3465d9' : 'grey',
              },
            ]}>
            <MaterialIcon
              name="email"
              size={20}
              color={this.state.borderColor === 'email' ? '#3465d9' : 'grey'}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  color:
                    this.state.borderColor === 'email' ? '#3465d9' : 'grey',
                },
              ]}
              placeholder="Email"
              onFocus={this._onFocus('email')}
            />
          </View>
          <View
            style={[
              styles.section,
              {
                borderColor:
                  this.state.borderColor === 'password' ? '#3465d9' : 'grey',
              },
            ]}>
            <MaterialIcon
              name="lock"
              size={20}
              color={this.state.borderColor === 'password' ? '#3465d9' : 'grey'}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  color:
                    this.state.borderColor === 'password' ? '#3465d9' : 'grey',
                },
              ]}
              placeholder="Password"
              onFocus={this._onFocus('password')}
            />
          </View>

          <TouchableOpacity style={styles.login}>
            <Text style={styles.textLogin}>Signup</Text>
          </TouchableOpacity>
          <View style={styles.signup}>
            <Text
              style={[
                styles.textSignup,
                {
                  color: 'grey',
                },
              ]}>
              Have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LoginScreen');
              }}>
              <Text
                style={[
                  styles.textSignup,
                  {
                    color: '#3465d9',
                  },
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    color: '#3465d9',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'grey',
  },
  action: {},
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgotPass: {
    textAlign: 'right',
    marginTop: 15,
    color: '#3465d9',
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 50,
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSignup: {
    textAlign: 'center',
  },
});
