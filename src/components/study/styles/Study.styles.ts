import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center'
    },
    detailContainer: {
        backgroundColor: colors.secondaryBackgound,
        borderRadius: 5
    },
    detailUpperContainer: {
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap'
    },
    detailCanvasContainer: {
        backgroundColor: colors.darkMediumGrey,
        borderRadius: 5
    },
    detailButtonsContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    detailLowerContainer: {
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