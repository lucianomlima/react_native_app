/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

class Button extends Component {
    _onPressBtn() {
        console.log('Teste');
    }
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this._onPressBtn}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.instructions}>
                    <Text style={{margin: 10}}>Abrir {this.props.appName}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class URLSchemeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World no React Native!
        </Text>
        <Button appName="Clube Correio" />
        <Button appName="Guia Correio" />
        <Button appName="Correio Pageflip" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'navy',
    width: 150,
    height: 40
  }
});

AppRegistry.registerComponent('URLSchemeApp', () => URLSchemeApp);
