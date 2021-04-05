import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const News = ({ news }) => {

  const [isOpened, setOpen] = useState(false);
  
  const onSetOpen = () => {
    setOpen(!isOpened);
  };

  return (
    <TouchableOpacity style={[styles.container, isOpened ? { minHeight: '80%' } : {}]} activeOpacity={1} onPress={onSetOpen} activeOpacity={1}>
      <View style={styles.topInfo}>
        <Text style={styles.topTitle}>Main title for news</Text>
        <Text style={styles.topDate}>12.03.2021</Text>
      </View>
      {isOpened ?
        <View style={styles.openedInfo}>
          <Image source={require('../../public/images/general/mocknews.png')} style={{ marginTop: 9, height: 120, width: '100%' }} />
          <Text style={styles.newsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco...
            </Text>
        </View>
        :
        <View style={[styles.closedInfo]}>
          <Text style={[styles.newsText, { paddingRight: 16, width: '84%', marginTop: 0 }]} numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco...
</Text>
          <Image source={require('../../public/images/general/mocknews.png')} style={{ width: 60, height: 60 }} />
        </View>

      }
    </TouchableOpacity>
  )
}

export default News;
