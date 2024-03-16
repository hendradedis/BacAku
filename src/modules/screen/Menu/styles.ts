import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  imageBackground: ImageStyle;
  containerTitle: TextStyle;
  daftarBuku: TextStyle;
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
  containerTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 350,
    backgroundColor: '#273c75',
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
  },
  daftarBuku: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1,
  },
});

export default styles;
