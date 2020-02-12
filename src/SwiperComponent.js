import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

import asset1Img from './asset/asset1.png';
import asset2Img from './asset/asset2.png';
import asset3Img from './asset/asset3.png';

const {width, height} = Dimensions.get('screen');

const heightImg = height * 0.5 * 0.8;
const widthImg = heightImg * 1.1;
const widthBtn = width * 0.3;

export default class SwiperComponent extends React.Component {
  state = {
    animationSignup: null,
    animationLogin: null,
    show: false,
  };

  _onIndexChange = index => {
    if (index === 2) {
      this.setState({
        animationSignup: 'bounceInLeft',
        animationLogin: 'bounceInRight',
        show: true,
      });
    } else {
      this.setState({
        animationLogin: null,
        animationSignup: null,
        show: false,
      });
    }
  };

  render() {
    return (
      <Swiper
        loop={false}
        style={styles.dot}
        onIndexChanged={this._onIndexChange}>
        <View style={styles.silde}>
          <View style={styles.header}>
            <Image
              source={asset1Img}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Cloud Storage</Text>
            <Text style={styles.text}>
              if you have any questions or feedback then please comment below!
            </Text>
          </View>
        </View>

        <View style={styles.silde}>
          <View style={styles.header}>
            <Image
              source={asset2Img}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Share Storage</Text>
            <Text style={styles.text}>
              if you have any questions or feedback then please comment below!
            </Text>
          </View>
        </View>

        <View style={styles.silde}>
          <View style={styles.header}>
            <Image
              source={asset3Img}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Save Storage</Text>
            <Text style={styles.text}>
              if you have any questions or feedback then please comment below!
            </Text>
            {this.state.show && (
              <View style={{flexDirection: 'row'}}>
                <Animatable.View
                  animation={this.state.animationSignup}
                  delay={0}
                  duration={1500}
                  useNativeDriver={true}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SignupScreen');
                    }}
                    style={[
                      styles.button,
                      {
                        borderColor: '#3465d9',
                        borderWidth: 1,
                        borderRadius: 50,
                        marginTop: 15,
                      },
                    ]}>
                    <Text
                      style={{
                        color: '#3465d9',
                      }}>
                      Signup
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>
                <Animatable.View
                  animation={this.state.animationLogin}
                  delay={0}
                  duration={1500}
                  useNativeDriver={true}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('LoginScreen');
                    }}
                    style={[
                      styles.button,
                      {
                        backgroundColor: '#3465d9',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 50,
                        marginTop: 15,
                        marginLeft: 20,
                      },
                    ]}>
                    <Text
                      style={{
                        color: '#fff',
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
            )}
          </View>
        </View>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  silde: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: heightImg,
    width: widthImg,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3465d9',
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },
  dot: {
    backgroundColor: 'rgba(52,101,217,.4)',
  },
  button: {
    width: widthBtn,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
