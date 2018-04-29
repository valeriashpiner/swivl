import React from 'react';

import { TouchableOpacity, Image, View, Text } from 'react-native';

import styles from './styles';

export default class UserItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <TouchableOpacity key={item.id} style={styles.row}>
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.container}>
            <Text>Login: {item.login}</Text>
            <Text>Link: {item.url}</Text>
        </View>    
      </TouchableOpacity>
    );
  }
}
