import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryBackgound
    },
    title: {
        ...fonts.mediumArial
    },
    initial: {
        ...fonts.largeArial
    },
    subtitle: {
        ...fonts.mediumMaru,
        color: colors.secondaryText
    }
});