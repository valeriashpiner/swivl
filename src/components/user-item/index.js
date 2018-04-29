import React from 'react';

import { TouchableOpacity, Image, View, Text } from 'react-native';

import styles from './styles';

export default class UserItem extends React.Component {

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity key={item.id} style={styles.row} onPress={() => navigation.navigate("listOfFollowers", { screen: "listOfFollowers" })}>
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.container}>
            <Text style={styles.text}>Login: {item.login}</Text>
            <Text style={styles.text} numberOfLines={1}>Link: {item.url}</Text>
        </View>    
      </TouchableOpacity>
    );
  }
}
