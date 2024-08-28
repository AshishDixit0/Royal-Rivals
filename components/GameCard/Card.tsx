import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import API from "@/services/API";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CardProps {
  navigate: any;
  gameData: any;
}

const Card = ({ navigate, gameData }: CardProps) => {
  const roomData = useSelector(state => state.GameRoomReducer)
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  
  const onGameSelection = async (id: any) => {
    console.log('this is the game data: ', gameData);
    setLoader(true)
    
    await API
      .get(`room/${gameData._id}`)
      .then((response) => {
        const _data = response.data
        console.log(_data, "jlllllllllllllllllllljjjjj")
        if (_data.message) {
          navigate.navigate('GameScreen', {
            gameData: _data
          })
          setLoader(false);
        }
      });
  }

  const handleNavigate = () => {
    console.log('this is calleddddd');
    
    // navigate.navigate("LudoScreen");
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onGameSelection}>
      <View style={styles.innercard}>
        <Text style={styles.title}>{`${gameData.no_of_players} Player`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Prize</Text>
          <View style={styles.boxvalue}>
            <Text style={styles.infoValue}>{`₹ ${gameData.price_pool}`}</Text>
          </View>
        </View>
        <View style={styles.info1}>
          <Text style={styles.infoText1}>{`${gameData.no_of_winners} Winner`}</Text>
          <Text style={styles.timer}>{`00:${Math.floor(gameData.time / 60)
            .toString()
            .padStart(2, "0")}:${(gameData.time % 60)
            .toString()
            .padStart(2, "0")}`}</Text>
          <Text style={styles.matchStart}>Match Starts In</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Entry Fee</Text>
          <View style={styles.boxvalue}>
            <Text style={styles.infoValue}>{`₹ ${gameData.entry_fee}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 359,
    height: 144,
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: Colors.golden,
    borderRadius: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50 - 10, 
    marginLeft: 17,
  },
  innercard: {
    backgroundColor: Colors.header_Color,
    width: 359,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 5,
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
  },
  infoText1: {
    color: Colors.golden,
    fontSize: 14,
  },
  infoValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  timer: {
    color: "#EF9D1F",
    fontSize: 14,
    fontWeight: "bold",
  },
  matchStart: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 10,
  },
  boxvalue: {
    backgroundColor: Colors.header_Color,
    width: 85,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  info1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Card;
