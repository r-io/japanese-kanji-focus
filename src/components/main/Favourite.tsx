import React from 'react';
import { View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';

type Props = NavigationStackScreenProps & DispatchProp;

class Favourite extends React.Component<Props> {

  render() {
    return (
      <View />
    );
  }

}

export default connect()(Favourite);
