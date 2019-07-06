import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text style={styles.title}>InstaClone</Text>
        </View>
        <View style={styles.userBar}>

        </View>
        <Image
          style={styles.imageContainer}
          source={{ uri: "https://st.automobilemag.com/uploads/sites/11/2018/10/Singer-Vehicle-Design-Porsche-21.jpg"}}
        />
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
  imageContainer: {
     width: 100+'%',
     height: 50+'%'
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
  },
  userBar: {
    width: 100+'%',
    height: 50,
    backgroundColor: 'rgb(250,250,250)'
  },
  title: {
    fontSize: 20
  }
})
export default InstaClone;
