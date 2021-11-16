import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import styles from './styles/DetailRow.styles';

interface Props {
  title: string;
  valueContainerStyle?: StyleProp<ViewStyle>;
}

interface State { }

class DetailRow extends React.PureComponent<Props, State> {

  render() {
    const { title, children, valueContainerStyle } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={[styles.valueContainer, valueContainerStyle]}>
          {children}
        </View>
      </View>
    );
  }
}

export default DetailRow;