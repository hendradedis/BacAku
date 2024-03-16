import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  button: ViewStyle;
  imageBackground: ImageStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    height: '100%',
  },
  contentBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparant',
    width: 250,
    height: 150,
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  image: {
    borderRadius: 38,
  },
});

export default styles;
