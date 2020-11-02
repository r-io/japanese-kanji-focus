import { UserData } from '@typings/model/auth';
import ReduxState from '@typings/reduxState';
import React from 'react';
import { View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';

export interface StateProps {
  userData?: UserData;
  lastRatingPopup: Date | undefined;
  isRated: boolean;
}

type Props = NavigationStackScreenProps & DispatchProp & StateProps;

interface State {
}

class Challenge extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    userData: state.auth.userData,
    lastRatingPopup: state.session.rating.lastRatingPopup,
    isRated: state.session.rating.isRated
  };
}

export default connect(mapStateToProps)(Challenge);