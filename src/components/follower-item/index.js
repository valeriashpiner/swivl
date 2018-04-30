import React from 'react';
import { Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles';

export default class FollowerItem extends React.Component {

  render() {
    const { item } = this.props;
    console.log(item, 'item')

    return (
      <View key={item.id} style={styles.row}>
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.container}>
            <Text style={styles.textLogin}>{item.login}</Text>
            <TouchableOpacity style={styles.linkRow} onPress={() => Linking.openURL(item.html_url)}>
            <Icon
              name='github-square'
              type='font-awesome'
              color='rgba(171, 171, 171, 1)'/>
              <Text style={styles.text}>Got to profile</Text>
            </TouchableOpacity>
        </View>    
      </View>
    );
  }
}
