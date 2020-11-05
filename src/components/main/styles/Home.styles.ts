import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: colors.secondaryBackgound,
        borderColor: colors.mediumGray
    },
    cardTitle: {
        ...fonts.largeArial
    }
});