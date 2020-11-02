import appleAuth, {
  AppleAuthCredentialState,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-community/google-signin';
import bind from 'bind-decorator';
import React from 'react';
import { Platform, View } from 'react-native';
import { SocialIcon, Text } from 'react-native-elements';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import styles from './styles/SocialButtons.styles';

interface Props {
  onFacebookSuccess: (accessToken: string) => void;
  onGoogleSuccess: (accessToken: string) => void;
  onAppleSuccess: (accessToken: string) => void;
  onError: (error: string) => void;
  authError: string | undefined;
  isLogIn?: boolean;
}

class SocialButtons extends React.Component<Props, {}> {

  @bind
  handlePressGoogle() {
    const { onGoogleSuccess, onError } = this.props;

    GoogleSignin.isSignedIn()
      .then((isSignedIn) => {
        if (isSignedIn) {
          GoogleSignin.getTokens()
            .then(({ accessToken }) => {
              GoogleSignin.signOut();
              onGoogleSuccess(accessToken);
            })
            .catch((err) => onError(err.message));
        } else {
          GoogleSignin.hasPlayServices()
            .then(result => {
              if (result) {
                GoogleSignin.signIn()
                  .then(() => this.handlePressGoogle())
                  .catch((err) => onError(err.message));
              } else {
                onError('No Google Play Services');
              }
            })
            .catch((err) => onError(err.message));
        }
      })
      .catch((err) => onError(err.message));
  }

  @bind
  handlePressFacebook() {
    const { onFacebookSuccess, onError } = this.props;
    AccessToken.getCurrentAccessToken()
      .then((token) => {
        if (token) {
          LoginManager.logOut();
          onFacebookSuccess(token.accessToken);
        } else {
          LoginManager.logInWithPermissions(['email', 'public_profile'])
            .then((res) => {
              if (res.grantedPermissions && res.grantedPermissions?.length >= 2) {
                this.handlePressFacebook();
              }
            })
            .catch((err) => onError(err.message));
        }
      })
      .catch((err) => onError(err.message));
  }

  @bind
  async handlePressApple() {
    const { onAppleSuccess, onError } = this.props;
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [AppleAuthRequestScope.FULL_NAME],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      onAppleSuccess(appleAuthRequestResponse.authorizationCode || '');
    } else if (credentialState === AppleAuthCredentialState.NOT_FOUND) {
      onError('Apple ID not found or wrong');
    }
  }

  public render() {
    const { authError, isLogIn } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <SocialIcon
            style={styles.button}
            fontStyle={styles.text}
            title={(isLogIn ? 'Log In with ' : 'Sign Up with ') + 'Facebook'}
            type="facebook"
            titleProps={{ allowFontScaling: false }}
            button
            onPress={this.handlePressFacebook}
          />
          <SocialIcon
            style={styles.button}
            fontStyle={styles.text}
            title={(isLogIn ? 'Log In with ' : 'Sign Up with ') + 'Google'}
            type="google"
            titleProps={{ allowFontScaling: false }}
            button
            onPress={this.handlePressGoogle}
          />
          {Platform.OS === 'ios' && appleAuth.isSupported &&
            <SocialIcon
              style={styles.button}
              fontStyle={styles.darkText}
              light={true}
              title={(isLogIn ? 'Sign In with ' : 'Sign Up with ') + 'Apple'}
              type="apple"
              titleProps={{ allowFontScaling: false }}
              button
              onPress={this.handlePressApple}
            />
          }
        </View>
        {authError &&
          <Text
            style={styles.error}
            allowFontScaling={false}
          >
            {authError}
          </Text>
        }
      </View>
    );
  }
}

export default SocialButtons;
