import AnimatedLottieView from 'lottie-react-native'
import React, { useRef, useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import HorizontalProgressBar from './HorizontalProgressBar';
import { getData } from '../utils';

interface PlayerBoxProps {
    data: any;
    onDiceRoll: any;
    onTokenOut: any;
}

export default function PlayerBox({ data, onDiceRoll, onTokenOut }: PlayerBoxProps) {

  const diceRef = useRef(null);
  useEffect(() => {
    (diceRef as any).current?.play();
    (diceRef as any).current?.play(1, 200);
  }, [data?.isRolling])


  const Color = (playerType: string) => {
    switch (playerType) {
      case "PLAYER-1": return "#50C878"
      case "PLAYER-2": return "#FFC300"
      case "PLAYER-3": return "#FB6962"
      case "PLAYER-4": return "#6495ED"
      default: return "#000"
    }
  }

  const [PlayerId, setPlayerId] = useState('FDOEGDODEBLJLLH')

  const playerData = async () => {
    const data: any = await getData('playerData')
    const _parseData = JSON.parse(data)
    setPlayerId(_parseData?._id)
  }
  useEffect(() => {
    playerData();
  }, [data])
  
  const diceImage = (value: number) => {
    switch (value) {
      case 1: return require('@/assets/DiceImages/image-1.png')
      case 2: return require('@/assets/DiceImages/image-2.png')
      case 3: return require('@/assets/DiceImages/image-3.png')
      case 4: return require('@/assets/DiceImages/image-4.png')
      case 5: return require('@/assets/DiceImages/image-5.png')
      case 6: return require('@/assets/DiceImages/image-6.png')
      default: return null
    }
  }
  return (
    <View
      style={{
        ...styles.playerBox,
        justifyContent: 'space-between',
        flex: 1,
        height: '100%',
        backgroundColor: Color(data?.playerType),
        borderRadius: 5,
        opacity: (data && data?.playerId) ? 1 : 0.7
      }}
    >
      {
        (data && data?.playerId) && (<>
          <View
            style={{
              alignItems: (data?.playerType == 'PLAYER-1' || data?.playerType == 'PLAYER-4') ? 'flex-start' : 'flex-end',
              justifyContent: (data?.playerType == 'PLAYER-1' || data?.playerType == 'PLAYER-2') ? 'space-between' : 'space-between',
              padding: 10,
              gap: 30
            }}
          >
            <View
              style={{
                flexDirection: (data?.playerType == 'PLAYER-1' || data?.playerType == 'PLAYER-4') ? 'row' : 'row-reverse',
                alignItems: "center",
                gap: 5
              }}
            >

              <Image
                source={{ uri: data?.avatar }}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  borderRadius: 100,
                  borderColor: '#fff',
                  backgroundColor: '#fff'
                }}
              />

              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'PoppinsBold',
                  fontSize: 11
                }}
              >{data?.username}</Text>

            </View>

            <View
              style={{
                flexDirection: (data?.playerType == 'PLAYER-1' || data?.playerType == 'PLAYER-4') ? 'row' : 'row-reverse',
                alignItems: "center",
                justifyContent: PlayerId == data.playerId ? 'center' : 'space-between',
                width: '100%'
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'BungeeSpiceRegular',
                  fontSize: PlayerId == data.playerId ? 60 : 35
                }}
              >
                {data?.score}
              </Text>

              {
                PlayerId != data.playerId && (<>
                  {
                    data.isTurn == true ?
                      <TouchableOpacity
                        disabled={true}
                        onPress={() => {
                          onDiceRoll(data?.playerId, false)
                        }}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 55,
                          height: 55,
                          elevation: 3
                        }}
                      >
                        {
                          data?.isRolling == true ?
                            <AnimatedLottieView
                              source={require('@/assets/Animation/Dice.json')}
                              ref={diceRef}
                              autoplay
                              loop
                              style={{
                                width: 180,
                                height: 180
                              }}
                            /> :
                            data?.diceRoll == 0 ?
                              <View
                                style={{
                                  width: 55,
                                  height: 55,
                                  color: '#fff',
                                  fontFamily: 'PoppinsBold',
                                  fontSize: 20,
                                  backgroundColor: '#5155b3',
                                  justifyContent: "center",
                                  alignItems: 'center',
                                  borderRadius: 5
                                }}
                              >
                                <Text
                                  style={{
                                    width: 45,
                                    height: 45,
                                    color: '#fff',
                                    fontFamily: 'BungeeSpiceRegular',
                                    fontSize: 12,
                                    backgroundColor: '#6f74bd',
                                    textAlign: "center",
                                    textAlignVertical: 'center',
                                    borderRadius: 5
                                  }}
                                >
                                  Roll
                                </Text>
                              </View> :
                              <View>
                                <Image
                                  source={diceImage(data?.diceRoll)}
                                  style={{
                                    borderWidth: 0,
                                    width: 55,
                                    height: 55
                                  }}
                                />
                              </View>
                        }
                      </TouchableOpacity>
                      :
                      <View
                        style={{
                          width: 55,
                          height: 55,
                          color: '#fff',
                          fontFamily: 'PoppinsBold',
                          fontSize: 20,
                          backgroundColor: '#5155b3',
                          justifyContent: "center",
                          alignItems: 'center',
                          borderRadius: 5
                        }}
                      >
                        <Text
                          style={{
                            width: 45,
                            height: 45,
                            color: '#fff',
                            fontFamily: 'PoppinsBold',
                            fontSize: 30,
                            backgroundColor: '#6f74bd',
                            textAlign: "center",
                            textAlignVertical: 'center',
                            borderRadius: 5
                          }}
                        >
                          ?
                        </Text>
                      </View>
                  }

                </>)
              }
            </View>
          </View>

          {
            PlayerId != data.playerId && data.isTurn == true && (<>
              <View
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: 0
                }}
              >
                <HorizontalProgressBar
                  onFinish={() => { }}
                />
              </View>
            </>)
          }
        </>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 30,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#141d37",
    minHeight: "100%",
  },
  boldText: {
    fontFamily: 'PoppinsBold',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
  },
  normalText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    lineHeight: 22,
    color: 'white',
  },
  playerBox: {
    // width: 120,
    // height: 120,
    width: '40%',
    // borderWidth: 0.2,
    // borderColor: 'white',
    // paddingTop: 30,
  },
})