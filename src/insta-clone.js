import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends Component {

  constructor(){
    super();
    this.state = {
      screenWidth: 0
    }
  }

  componentDidMount(){
    // alert(Dimensions.get('window').width)
    this.setState({
      screenWidth: Dimensions.get('window').width
    })
  }

  render () {
    const { screenWidth } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text style={styles.titleApp}>InstaClone</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{ uri: 'https://buscatupsicologo.com/wp-content/uploads/2016/11/sidebar_usuario-corporativo.png' }}
              style={styles.userPicture}
            />
            <Text style={styles.userTitle}>User</Text>
          </View>
          <View style={{ alignItems: 'center', paddingBottom: 15 }}>
            <Text style={{ fontSize: 25 }}>...</Text>
          </View>
        </View>

        <Image
          // style={styles.picturePosted}
          style={{ screenWidth, height: '50%' }}
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
  picturePosted: {
     width: 100+'%',
     height: 50+'%'
  },
  titleApp: {
    fontSize: 20
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
    backgroundColor: 'rgb(250,250,250)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  userPicture: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  userTitle: {
    marginLeft: 10
  }
})
export default InstaClone;
