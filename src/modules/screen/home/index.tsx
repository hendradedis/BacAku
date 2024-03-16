import * as React from 'react';
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  return (
    <Layouts style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/home.png')}
        style={styles.imageBackground}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={styles.button}>
          <Image
            style={styles.image}
            source={require('../../../assets/image/button.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </Layouts>
  );
};

export default HomeScreen;
