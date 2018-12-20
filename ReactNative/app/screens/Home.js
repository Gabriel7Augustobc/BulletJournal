import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';

import {Container} from '../components/Container';
import {Header} from '../components/Header';

class Home extends Component {
  static PropTypes = {
    navigation: PropTypes.object,
  };

  render () {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header />
        <KeyboardAvoidingView behavior="padding" />
      </Container>
    );
  }
}

export default Home;
