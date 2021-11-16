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
    },
    compoundsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    compoundContainer: {
        flex: 1,
        marginBottom: 2,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.mediumGray,
        width: '100%'
    },
    compoundUpperContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    compoundKanjiText: {
        flex: 1,
        ...fonts.largeMaru,
        fontWeight: 'bold'
    },
    compoundKanaText: {
        flex: 2,
        ...fonts.largeMaru,
        fontWeight: 'bold'
    },
    compoundTranslationText: {
        flex: 1,
        ...fonts.mediumArial,
    }
});