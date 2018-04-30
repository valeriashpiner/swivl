import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

import FollowerItem from '../../components/follower-item';
import styles from '../list-of-users/styles';

export default class FollowerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      perPage: 5,
    };

    const { followers_url } = this.props.navigation.state.params.item;

    this.item = { followers_url };
  }
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    const { since, perPage } = this.state;

    axios
      .get(`${this.item.followers_url}?since=${since}&per_page=${perPage}`)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch(() => {});
  };

  handleLoadMore = () => {
    this.setState(
      {
        perPage: this.state.perPage + 5,
      },
      () => {
        this.loadUsers();
      },
    );
  };

  render() {
    const { followers, perPage } = this.state;

    return (
      <View style={styles.container}>
        {followers && (
          <FlatList
            data={followers}
            renderItem={({ item }) => <FollowerItem item={item} />}
            keyExtractor={item => item.id.toString()}
            onEndThreshold={0}
          />
        )}
        <Button
          large
          title="Load more"
          containerViewStyle={styles.button}
          icon={{ name: 'github', type: 'font-awesome' }}
          backgroundColor="#000000"
          color="#ffffff"
          onPress={perPage <= 95 ? this.handleLoadMore : this.handleStopLoad}
        />
      </View>
    );
  }
}

FollowerList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
