import React, {Component} from 'react';
import {FlatList, Text, StatusBar, View} from 'react-native';

import bullets from '../data/bullets';
class CriarBullet extends Component {
  handlePress = () => {
    console.log ('row press');
  };

  render () {
    return (
      <View>
        <FlatList
          data={bullets}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}
