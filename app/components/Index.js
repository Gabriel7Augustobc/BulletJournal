import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Bullet from './Bullet';
import DatePicker from 'react-native-datepicker'

export default class Index extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    bulletArray: [],
    buletText: '',
    date: Date(),
  };
}


  render() {
    let bullets = this.state.bulletArray.map((val, key) => {
      return <Bullet key={key} keyval={key} val={val}
              deleteMethod={() => this.deleteBullet(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Bullet Journal </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {bullets}
        </ScrollView>

        <View style={styles.footer}>
        <DatePicker
        style={{width: 320, top: -10,}}
        date={this.state.date}
        mode="date"
        placeholder="Selecione a data"
        format="DD/MM/YYYY"
        minDate="01/01/2016"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

          <TextInput
          style={styles.textInput}
          onChangeText={(bulletText) => this.setState({ bulletText })}
          value={this.state.bulletText}
          placeholder='Digite seu bullet'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          >
          </TextInput>
        </View>

        <TouchableOpacity onPress={this.addBullet.bind(this)} style={styles.addButton}>
          <Text style={styles.addbuttonText}>✏️</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addBullet() {
    if (this.state.bulletText) {
      this.state.bulletArray.push({
        'date': this.state.date,
        'bullet': this.state.bulletText,
      });
      this.setState({ bulletArray: this.state.bulletArray });
      this.setState({ bulletText: '' });
    }
  }

  deleteBullet(key) {
    this.state.bulletArray.splice(key, 1);
    this.setState({ bulletArray: this.state.bulletArray });
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdde1',
  },
  header: {
      backgroundColor: '#4cd137',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#44bd32'
  },
  headerText: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      padding: 26
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
  textInput: {
      alignSelf: 'stretch',
      fontWeight: 'bold',
      color: '#fff',
      padding: 20,
      backgroundColor: '#e84118',
      borderTopWidth: 2,
      borderTopColor: '#c23616'
  },
  addButton: {
      position: 'relative',
      zIndex: 11,
      right: 0,
      left: 340,
      bottom: 90,
      backgroundColor: '#0097e6',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  addButtonText: {
      color: 'white',
      fontSize: 50
  }
});

