import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Polygon, Svg, Image, ClipPath, Defs } from 'react-native-svg';
import { Colors } from '@/constants/Colors';
import { BgImages } from '@/utils/GetBgImage';
import LottieView from 'lottie-react-native';
import Fireworks from '@/assets/animation/firework.json';

interface FourTriangles{
  player1?:{},
  player2?:{},
  player3?:{},
  player4?:{},

}

const FourTriangles = ({player1, player2, player3, player4}:FourTriangles) => {
  const size = 300;
  const [blast, setBlast] = React.useState(false);
  return (
    <View style={styles.mainContainer}>
      {blast && (
        <LottieView source={Fireworks} autoPlay loop hardwareAccelerationAndroid speed={1} style={styles.lottieView} />
      )}

      <Svg height={size} width={size - 5}>
        <Defs>
          <ClipPath id="clip1">
            <Polygon points={`0,0 ${size / 2},${size / 2} ${size},0`} />
          </ClipPath>
          <ClipPath id="clip2">
            <Polygon points={`${size},0 ${size},${size} ${size / 2},${size / 2}`} />
          </ClipPath>
          <ClipPath id="clip3">
            <Polygon points={`0,${size} ${size / 2},${size / 2} ${size},${size}`} />
          </ClipPath>
          <ClipPath id="clip4">
            <Polygon points={`0,0 ${size / 2},${size / 2} 0,${size}`} />
          </ClipPath>
        </Defs>
        <Image href={BgImages.GetImage(Colors.Green)} width={size} height={size} clipPath="url(#clip1)" />
        <Image href={BgImages.GetImage(Colors.Yellow)} width={size} height={size} clipPath="url(#clip2)" />
        <Image href={BgImages.GetImage(Colors.Blue)} width={size} height={size} clipPath="url(#clip3)" />
        <Image href={BgImages.GetImage(Colors.Red)} width={size} height={size} clipPath="url(#clip4)" />
      </Svg>
    </View>
  );
};

export default FourTriangles;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    width: '20%',
    height: '100%',
    overflow: 'hidden',
    borderColor: 'black',
  },
  lottieView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  }
});
