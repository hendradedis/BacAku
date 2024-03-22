import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  header: ViewStyle;
  pdf: ViewStyle;
  imageBackground: ImageStyle;
  icon: ImageStyle;
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
  header: {
    height: 60,
    padding: 16,
    backgroundColor: '#0097e6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
