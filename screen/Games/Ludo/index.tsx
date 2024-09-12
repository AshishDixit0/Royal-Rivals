import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Wrapper from "./components/Wrapper";
import { deviceHeight, deviceWidth } from "@/constants/scaling";
import Dice from "./components/Dice";
import { Colors } from "@/constants/Colors";
import Pocket from "./components/Pocket";
import VerticalPath from "./components/path/VerticalPath";
import { plot1Data, Plot2Data, plot3Data, plot4Data } from "@/utils/PlotData";
import HorizontalPath from "./components/path/HorizontalPath";
import FourTriangles from './components/FourTriangles';

export default function Ludo() {
  return (
    <Wrapper style={{}}>
      <View style={styles.container}>
        {/* top tokens */}
        <View style={styles.flexRow}>
          <Dice color={Colors.Green} />
          <Dice color={Colors.Yellow} rotate />
        </View>
        {/* Ludo board */}
        <View style={styles.ludoBoard}>
          <View style={styles.plotContainer}>
            <Pocket color={Colors.Green} player={2} />
            <VerticalPath cells={Plot2Data} color={Colors.Yellow}  />
            <Pocket color={Colors.Yellow} player={3} />
          </View>

          <View style={styles.pathContainer}>
            {/* <Pocket color={Colors.Red} player={1} /> */}
            <HorizontalPath cells={plot1Data} color={Colors.Green} />
            <FourTriangles />
            <HorizontalPath cells={plot3Data} color={Colors.Blue} />
          </View>

          <View style={styles.plotContainer}>
            <Pocket color={Colors.Red} player={1} />
            <VerticalPath cells={plot4Data} color={Colors.Red}  />
            <Pocket color={Colors.Blue} player={4} />
          </View>

        </View>
        {/* Bottom tokens */}
        <View style={styles.flexRow}>
          <Dice color={Colors.Red} />
          <Dice color={Colors.Blue} rotate />
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  ludoBoard: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    padding: 10,
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  pathContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    backgroundColor: '#1e5162',
  }
});
