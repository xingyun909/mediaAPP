/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//原生模块
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

//第三方库
import Icon from 'react-native-vector-icons/Ionicons';

//自定义组件
import List from './app/list/index.js';
import Edit from './app/edit/index.js';
import Account from './app/account/index.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});



export default class mediaApp extends React.Component {

  state = {
   selectedTab:'list'
  };


  render() {
    return (

      <TabBarIOS>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-videocam-outline"
          selectedIconName="ios-videocam"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list'
            });
          } }
          >
          <List />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-recording-outline"
          selectedIconName="ios-recording"
          selected={this.state.selectedTab === 'edit'}
          onPress={() => {
            this.setState({
              selectedTab: 'edit'
            });
          } }>
          <Edit />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-more-outline"
          selectedIconName="ios-more"
          selected={this.state.selectedTab === 'account'}
          onPress={() => {
            this.setState({
              selectedTab: 'account'
            });
          } }>
          <Account />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}



AppRegistry.registerComponent('mediaApp', () => mediaApp);
