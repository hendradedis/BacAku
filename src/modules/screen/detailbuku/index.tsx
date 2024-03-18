import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = (data): React.ReactElement => {
  console.log('data', data?.route?.params);
  const dataBuku = data?.route?.params;
  const navigation = useNavigation<any>();
  return (
    <Layouts style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={require('../../../assets/image/back.png')}
          />
        </TouchableOpacity>
        <Text>{dataBuku?.item?.title}</Text>
      </View>
      <Text>Body</Text>
    </Layouts>
  );
};

export default DetailScreen;
