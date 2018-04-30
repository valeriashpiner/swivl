import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

export default class UserItem extends React.Component {
  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity
        key={item.id}
        style={styles.row}
        onPress={() => navigation.navigate('listOfFollowers', { item })}
      >
        <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
        <View style={styles.container}>
          <Text style={styles.textLogin}>{item.login}</Text>
          <View style={styles.linkRow}>
            <Icon
              name="github-square"
              type="font-awesome"
              color="rgba(171, 171, 171, 1)"
            />
            <Text style={styles.text} numberOfLines={1}>
              {item.html_url}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

UserItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
