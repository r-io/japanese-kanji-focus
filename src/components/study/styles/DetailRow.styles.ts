import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    labelContainer: {
        marginBottom: 3
    },
    label: {
        ...fonts.largeMaru,
        color: colors.secondaryText
    },
    valueContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});