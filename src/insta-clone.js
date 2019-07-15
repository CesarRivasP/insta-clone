import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { PostFeed } from './components/container/';


class InstaClone extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text style={styles.titleApp}>InstaClone</Text>
        </View>
        <View>
          
        </View>
        <PostFeed />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100+'%',
    height: 100+'%'
  },
  tempNav: {
    width: 100+'%',
    height: 75,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
export default InstaClone;
