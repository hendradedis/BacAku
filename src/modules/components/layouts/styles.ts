import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import GlobalStyle from './../globalstyle/styles';

interface IStyles {
  layout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  layout: {
    paddingTop:
      Platform.OS === 'ios' ? moderateScale(50, 0.25) : moderateScale(25),
    paddingHorizontal: moderateScale(0, 0.25),
    backgroundColor: GlobalStyle.BLUE_DEFAULT_COLOUR,
  },
});

export default styles;
