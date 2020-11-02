import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import BaseFilmList from './BaseFilmList';

type Props = NavigationStackScreenProps & DispatchProp;

class Movie extends React.Component<Props> {

  render() {
    return (
      <BaseFilmList
        floatingButton={{
          isShowing: true,
          title: 'Movie Menu',
          filmType: 'movie'
        }}
        page={'movie'}
        {...this.props}
      />
    );
  }

}

export default connect()(Movie);
