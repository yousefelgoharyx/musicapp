import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import StyledText from '../components/Text';
import img from '../../assets/believer.jpg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
const Player = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.down} onPress={() => navigation.goBack()}>
        <MaterialIcon name="chevron-left" color="#999" size={32} />
      </TouchableOpacity>
      <Image style={styles.img} source={img} />
      <StyledText style={styles.song} bold>
        Believer
      </StyledText>
      <StyledText style={styles.artist} bold>
        Imagine Dragons
      </StyledText>

      <Slider
        step={1}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#999"
        thumbTintColor="#fff"
        style={styles.seeker}
      />

      <View style={styles.time}>
        <StyledText style={styles.timer}>0:145</StyledText>
        <StyledText style={styles.timer}>04:50</StyledText>
      </View>
      <View style={styles.btns}>
        <MaterialIcon name="skip-previous" size={32} color="#fff" />
        <TouchableOpacity>
          <MaterialIcon
            style={styles.play}
            name="pause"
            size={64}
            color="#fff"
          />
        </TouchableOpacity>
        <MaterialIcon name="skip-next" size={32} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  img: {
    width: 312,
    height: 312,
    borderRadius: 312 / 2,
    marginBottom: 24,
  },
  song: {
    fontSize: 24,
    lineHeight: 24 * 1.2,
  },
  artist: {
    fontSize: 16,
    opacity: 0.2,
    lineHeight: 16 * 1.2,
  },
  seeker: {
    width: '100%',
    marginTop: 16,
  },

  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  play: {
    marginHorizontal: 16,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
    paddingHorizontal: 12,
  },
  timer: {
    fontSize: 12,
  },
  down: {
    position: 'absolute',
    top: 16,
    left: 16,
    transform: [{rotate: '-90deg'}],
  },
});

export default Player;
