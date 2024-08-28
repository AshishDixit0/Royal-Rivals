import { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Card from "@/components/GameCard/Card";
import GameHeader from "@/components/GameHeader/GameHeader";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { getRoomApi } from "@/store/GameRoom";
import { logout } from "@/store/AuthSlice";
import API from "@/services/API";

const data = {
  LogoTextLudo: require("@/assets/images/logotext1.png"),
  LogoTextSnake: require("@/assets/images/logotext2.png"),
  BackgroundImage: require("@/assets/images/backgroundApp.png"),
};

export default function GameSelectScreen({ navigation }: { navigation: any }) {
  const [bannerImage, setBannerImage] = useState(data.LogoTextLudo);
  const dispatch = useDispatch()<any>;
  const roomData = useSelector((state: any) => state.GameRoomReducer);
  const [loader, setLoader] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage((prevImage: any) =>
        prevImage === data.LogoTextLudo ? data.LogoTextSnake : data.LogoTextLudo
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(getRoomApi());
  }, []);

  const handleSignUp = async () => {
    navigation.navigate('LudoScreen')
    // dispatch(logout());
  };

  const onGameSelection = async (id: any) => {
    console.log('this is the id: ', id);
    
    setLoader(true)
    await API
      .get(`room/${id}`)
      .then((response) => {
        const _data = response.data
        console.log(_data, "jlllllllllllllllllllljjjjj")
        if (_data.message) {
          navigation.navigate('GameScreen', {
            gameData: _data
          })
          setLoader(false)
        }
      });
  }

  return (
    <ImageBackground
      source={data.BackgroundImage}
      resizeMode="cover"
      style={styles.container}
    >
      <GameHeader />
      <View style={styles.banner}>
        <Image source={bannerImage} style={styles.logotext} />
      </View>
      <ScrollView style={styles.scroll}>
        {roomData?.room?.map((gameType: any) => (
          <Card key={gameType._id} gameData={gameType} navigate={navigation} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
