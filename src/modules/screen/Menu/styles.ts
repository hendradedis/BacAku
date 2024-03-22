import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  contentBox: ViewStyle;
  imageBackground: ImageStyle;
  containerTitle: TextStyle;
  daftarBuku: TextStyle;
  text: TextStyle;
  boxCard: ViewStyle;
  leftBox: ViewStyle;
  rightBox: ViewStyle;
  heightFlatlist: ViewStyle;
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
    marginBottom: 25,
    marginTop: '35%',
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
  boxCard: {
    flexDirection: 'row',
    paddingVertical: 8,
    marginHorizontal: 16,
  },
  leftBox: {
    width: '25%',
    height: 45,
    backgroundColor: '#273c75',
    paddingHorizontal: 9,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
  },
  rightBox: {
    width: '75%',
    height: 45,
    backgroundColor: '#7f8fa6',
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderBottomRightRadius: 30,
  },
  text: {
    fontSize: 14,
    letterSpacing: 1,
    color: 'white',
  },
  heightFlatlist: {
    height: '65%',
  },
});

export default styles;
