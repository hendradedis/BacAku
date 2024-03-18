import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {DATA_BUKU} from '../../../constants/recoils.const';
import {IdataBuku} from '../../../appTypes/sample.type';

const MenuScreen = (): React.ReactElement => {
  const navigation = useNavigation<any>();
  function renderCards({item}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', (data = {item}))}
          style={styles.boxCard}>
          <View style={styles.leftBox}>
            <Text style={styles.text}> No. {item?.Id}</Text>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.text}> {item?.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Layouts style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/Welcome.png')}
        style={styles.imageBackground}>
        <View style={styles.containerTitle}>
          <Text style={styles.daftarBuku}>Daftar Buku</Text>
        </View>
        <View style={styles.heightFlatlist}>
          <FlatList data={DATA_BUKU} renderItem={renderCards} />
        </View>
      </ImageBackground>
    </Layouts>
  );
};

export default MenuScreen;
