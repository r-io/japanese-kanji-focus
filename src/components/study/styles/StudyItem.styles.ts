import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center'
    },
    innerContainer: {
        backgroundColor: colors.secondaryBackgound,
        borderRadius: 5,
    },
    upperContainer: {
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap'
    },
    canvasContainer: {
        backgroundColor: colors.darkMediumGrey,
        borderRadius: 5
    },
    buttonsContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    lowerContainer: {
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    onyomiBadge: {
        backgroundColor: colors.primary,
        margin: 2,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 0
    },
    kunyomiBadge: {
        backgroundColor: colors.secondary,
        margin: 2,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 0
    },
    badgeText: {
        ...fonts.largeMaru
    },
    meaning: {
        ...fonts.largeArial,
        textAlign: 'left'
    }
});