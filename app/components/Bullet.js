import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class Bullet extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.bullet}>
                <Text style={styles.bulletText}>{this.props.val.date}</Text>
                <Text style={styles.bulletText}>{this.props.val.bullet}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.bulletDelete}>
                    <Text style={styles.bulletDeleteText}>✔️</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bullet: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        backgroundColor: '#fff',
        borderBottomWidth:2,
        borderBottomColor: '#e1b12c',
        top: 5
    },
    bulletText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#8c7ae6'
    },
    bulletDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40739e',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius: 10,
    },
    bulletDeleteText: {
        color: 'white'
    }
});
