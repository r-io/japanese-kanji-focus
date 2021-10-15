import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBackground,
        borderRadius: 5
    },
    title: {
        ...fonts.smallArial
    }
});