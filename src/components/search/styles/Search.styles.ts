import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5
  },
  innerContainer: {
    flex: 1,
  },
  sectionTitle: {
    ...fonts.mediumPrimaryBold,
    marginLeft: 5
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 5
  },
  pickerLabel: {
    flex: 0.2,
    textAlign: 'right',
    marginRight: 10,
    ...fonts.smallPrimary
  },
  noResult: {
    flex: 1,
    ...fonts.mediumPrimary,
    textAlign: 'center',
    marginTop: 10
  },
  searchContainer: {
    backgroundColor: colors.primaryBackground,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginVertical: 10
  },
  searchInnerContainer: {
    backgroundColor: colors.trueBlack
  },
  searchInput: {
    ...fonts.mediumPrimary
  }
});