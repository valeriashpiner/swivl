import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { githubLogo } from '../../assets';
import styles from './styles';

export default class EnterScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={githubLogo} style={styles.logo} />
        <Button
          title="CHECK USERS"
          onPress={() => navigate('listOfUsers', { screen: 'listOfUsers' })}
          rounded
          backgroundColor="#000000"
          color="#ffffff"
        />
      </View>
    );
  }
}

EnterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
