import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import config from './config/index'


class InstaClone extends Component {

  constructor(){
    super();
    this.state = {
      screenWidth: 0,
      liked: false
    }
  }

  componentDidMount(){
    // alert(Dimensions.get('window').width)
    this.setState({
      screenWidth: Dimensions.get('window').width
    })
  }

  likeToggle = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render () {
    const { screenWidth, liked } = this.state;

    const heartIconColor = liked ? 'red' : null;
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

        <TouchableOpacity onPress={this.likeToggle} activeOpacity={0.7}>
          <Image
            // style={styles.picturePosted}
            style={{ screenWidth, height: 300 }}
            source={{ uri: "https://st.automobilemag.com/uploads/sites/11/2018/10/Singer-Vehicle-Design-Porsche-21.jpg"}}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <Image
            source={config.images.heartIcon}
            style={[styles.icon, { height: 35, width: 35, marginLeft: 5, tintColor: heartIconColor }]}
          />
          <Image
            source={config.images.chatIcon}
            style={[styles.icon, { height: 35, width: 35, tintColor: '#424242' }]}
            resizeMode='stretch'
          />
          <Image
            source={config.images.arrowIcon}
            style={[styles.icon, { height: 40, width: 40, tintColor: '#424242' }]}
          />
        </View>
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
    height: config.styleConstants.rowHeight,
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
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: '100%',
    borderColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 5
    // height: 40,
    // width: 40
  }
})
export default InstaClone;
