import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    canvasContainer: {
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