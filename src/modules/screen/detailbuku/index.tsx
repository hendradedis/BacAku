import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layouts from '../../components/layouts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import PdfRendererView from 'react-native-pdf-renderer';

const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};

const DetailScreen = (data): React.ReactElement => {
  // console.log('data', data?.route?.params);
  const [source, setSource] = React.useState<any>();
  const [downloading, setDownloading] = useState(false);
  // const source = {
  //   uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  //   cache: true,
  // };
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
      <PdfRendererView
        style={styles.pdf}
        source={source}
        // distanceBetweenPages={16}
        // maxZoom={5}
        // onPageChange={(current, total) => {
        //   console.log(current, total);
        // }}
      />
    </Layouts>
  );
};

export default DetailScreen;
