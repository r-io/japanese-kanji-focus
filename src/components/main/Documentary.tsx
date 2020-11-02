import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import BaseFilmList from './BaseFilmList';

type Props = NavigationStackScreenProps & DispatchProp;

class Documentary extends React.Component<Props> {

  render() {
    return (
      <BaseFilmList
        floatingButton={{
          isShowing: true,
          title: 'Documentary Menu',
          filmType: 'documentary'
        }}
        page={'documentary'}
        {...this.props}
      />
    );
  }

}

export default connect()(Documentary);