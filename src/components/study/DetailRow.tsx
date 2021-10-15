import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/DetailRow.styles';

interface Props {
  title: string;
}

interface State { }

class DetailRow extends React.PureComponent<Props, State> {

  render() {
    const { title, children } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
          {children}
        </View>
      </View>
    );
  }
}

export default DetailRow;