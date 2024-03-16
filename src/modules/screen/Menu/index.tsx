import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';

const MenuScreen = (): React.ReactElement => {
  return (
    <Layouts style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/Welcome.png')}
        style={styles.imageBackground}>
        <View style={styles.containerTitle}>
          <Text style={styles.daftarBuku}>Daftar Buku</Text>
        </View>
      </ImageBackground>
    </Layouts>
  );
};

export default MenuScreen;
