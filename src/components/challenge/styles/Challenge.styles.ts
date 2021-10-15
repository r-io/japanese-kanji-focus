import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    detailContainer: {
        justifyContent: 'space-evenly'
    },
    detailUpperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexWrap: 'wrap'
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
    detailLowerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5
    },
    meaning: {
        ...fonts.largeArial,
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    canvasContainer: {
        marginHorizontal: 30,
        marginBottom: 30,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    canvasInnerContainer: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: colors.darkMediumGrey,
        borderRadius: 5
    },
    gridContainer: {
        position: 'absolute'
    },
    kanjiAnswer: {
        position: 'absolute'
    },
    sketchCanvas: {
        flex: 1
    },
    hintButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10
    }
});