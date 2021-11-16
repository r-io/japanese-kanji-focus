import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bottomContainer: {
        flex: 1,
        height: 20
    },
    card: {
        backgroundColor: colors.secondaryBackgound,
        borderColor: colors.mediumGray
    },
    cardHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    cardHeader: {
        ...fonts.titleArial,
        alignItems: 'center',
        display: 'flex',
        marginBottom: 0
    },
    cardTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTitle: {
        ...fonts.largeArial
    }
});