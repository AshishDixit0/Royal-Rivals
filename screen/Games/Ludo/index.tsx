import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated, StyleSheet, Image, Dimensions, Keyboard, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import __GameMap from '../data/GameMap.json'
import TokenBox from '@/components/TokenBox';
import HomeBox from '@/components/HomeBox';
import PlayerBox from '@/components/PlayerBox';
import AnimatedLottieView from 'lottie-react-native';
import { BackButton, Chat, CoinsIcon, SettingIcon, SkipTurn } from '@/components/CommonSVG';
import Timer from '@/components/Timer';
import Loader from '@/components/Loader';
import { getData } from '@/utils/index';
import { useDispatch, useSelector } from 'react-redux';
import { updateGameMap } from '@/store/GameMap';
import SocketSingleton from '@/helpers/socket';
import { BACKEND_URL } from '@/config/index';
import { updateallPlayers } from '@/store/AllPlayers';
import { updateCurrentPlayer } from '@/store/CurrentPlayer';
import { getMapDataApi } from '@/store/GameMap';

interface GameScreenProps {
  route: any;
  navigation: any;
}

export default function GameScreen({ route, navigation }: GameScreenProps) {
  const dispatch = useDispatch()<any>;
  const GameMap = useSelector((state: any) => {
    return state.GameMapReducer?.map;
  })
  console.log('this is the Game map: ', GameMap )
  
  const initialState = useSelector((state: any) => {
    return state.AllPlayersReducer?.allPlayers
  })

  const currentPlayerData = useSelector((state: any)=>{
    return state.CurrentPlayerReducer?.currentplayer
  })

  const socket = SocketSingleton.getInstance(BACKEND_URL);
  const width = Dimensions.get('screen').width - 30
  const [_GameMap, setGameMap] = useState(__GameMap)
  const [waitingForPlayers, setWaitingForPlayers] = useState(true)
  const [_initialState, setInitalState] = useState([]);
  const gameData = route?.params?.gameData
  const [currentPlayerId, setCurrentPlayerId] = useState(null);

  const playerData = async () => {
    const data: any = await getData('playerData')
    const _parseData = JSON.parse(data)
    const _currentPlayer = initialState.find((player: any) => player?.playerId === _parseData?._id);
    // setCurrentPlayerData(prev => _currentPlayer);
    dispatch(updateCurrentPlayer(_currentPlayer))
  }

  useEffect(() => {
    if (initialState?.length > 0) {
      playerData();
    }
  }, [initialState])

  const setId = async () => {
    const data: any = await getData('playerData')
    const _parseData = JSON.parse(data)
    setCurrentPlayerId(_parseData?._id);
  }
  useEffect(() => {
    setId()
    dispatch(getMapDataApi());
  }, [])

  const sendPlayerData = (data: any) => {
    socket.emit(`playerDataFromClient`, { data: data, playerId: currentPlayerData?.playerId });
  }

  const sendMapData = (data: any) => {
    socket.emit(`MapDataFromClient`, { data: data, playerId: currentPlayerData?.playerId, playerData: initialState });
  }

  useEffect(() => {
    if (gameData?.findRoomWithGameTypeId?._id) {
      socket.emit('startGame', { _id: gameData?.findRoomWithGameTypeId?._id });
    }
  }, [gameData?.findRoomWithGameTypeId?._id])


  useEffect(() => {
    if (currentPlayerId) {
      socket.emit("saveSocketId", {
        playerId: currentPlayerId,
        gameTypeId: gameData?.findRoomWithGameTypeId?._id,
      });
    }
  }, [currentPlayerId])

  useEffect(() => {
    socket.on('waitingForPlayers', (_data) => {
      console.log(_data, 'waitonggggg')
      setWaitingForPlayers(_data == true ? false : true)
    })

    socket.on(gameData?.findRoomWithGameTypeId?._id, (_data) => {
      dispatch(updateGameMap(_data))
      setGameMap(_data)
      console.log('game has started: ', true);
      setWaitingForPlayers(false)
    })

    socket.on(`${gameData?.findRoomWithGameTypeId?._id}-roomData`, (_data) => {
      console.log('this is roomData', _data?.players)
      dispatch(updateallPlayers(_data?.players, "init"));
    })

    socket.on('playerDataToClient', async (data) => {
      dispatch(updateallPlayers(data, "change"));
      const _currentPlayer = data.find((player: any) => player?.playerId === currentPlayerId);
      dispatch(updateCurrentPlayer(_currentPlayer))
      // setCurrentPlayerData(prev => _currentPlayer);
    })

    socket.on('MapDataToClient', async (data) => {
      dispatch(updateGameMap(data))
      setGameMap(prev => {
        console.log("Setting Game Map Data :", data);
        return data;
      });
    })
  }, [])




  // Function to check if two objects are deeply equal
  const areEqual = (obj1: any, obj2: any) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  const useDeepEffect = (callback: any, dependencies: any) => {
    const dependenciesRef = useRef(dependencies);

    useEffect(() => {
      if (!areEqual(dependenciesRef.current, dependencies)) {
        callback();
        dependenciesRef.current = dependencies;
      }
    }, [callback, dependencies]);
  };

  // const [currentPlayerData, setCurrentPlayerData] = useState(null)

  useDeepEffect(() => {
    if (initialState.length > 0) {
      playerData();
    }
  }, [initialState?.length]);

  const diceImage = (value: number) => {
    switch (value) {
      case 1: return require('../../../assets/DiceImages/image-1.png')
      case 2: return require('../../../assets/DiceImages/image-2.png')
      case 3: return require('../../../assets/DiceImages/image-3.png')
      case 4: return require('../../../assets/DiceImages/image-4.png')
      case 5: return require('../../../assets/DiceImages/image-5.png')
      case 6: return require('../../../assets/DiceImages/image-6.png')
      default: return null
    }
  }

  const removeAndReturnCurrentTokenData = (jsonData: any, currentPosition: any, newData: any, deleteData: any) => {
    let currentPositionData;

    // Iterate over sections in jsonData
    for (const sectionKey in jsonData) {
      if (!jsonData.hasOwnProperty(sectionKey)) continue;
      const section = jsonData[sectionKey];

      // Iterate over subarrays in each section
      for (let i = 0; i < section.length; i++) {
        const subarray = section[i];

        // Iterate over items in each subarray
        for (let j = 0; j < subarray.length; j++) {
          const item = subarray[j];

          // Check if item's position matches currentPosition
          if (item.position === currentPosition) {
            currentPositionData = item;

            // Delete token data if deleteData is true
            if (deleteData) {
              if (item.tokenData.length === 1) {
                // Make the tokenData Array blank if it contains only one token
                item.tokenData = [];
              } else {
                // Remove token data with matching tokenId
                item.tokenData = item.tokenData.filter((token: any) => token.tokenId !== newData.tokenId);
              }
            }
            // Break out of loops once currentPositionData is found
            return currentPositionData;
          }
        }
      }
    }

    return currentPositionData;
  };


  function _UpdateGameMap(currentPosition: any, move: any, newData: any) {
    const updatedJsonData = { ...GameMap };
    const currentPlayerId = newData.playerId;

    // Find the current position data
    let currentPositionData = findPositionData(currentPosition, updatedJsonData,);
    if (!currentPositionData) {
      console.error("Current position not found in GameMap!");
      return;
    }

    let tokenReachedHome = false;
    let movesToHome = move;
    let repeatTurn = move === 6;

    // Move the token to the new position
    let newPosition = (currentPositionData.isHomeEntry && currentPositionData.homeEntryFor === newData.playerType) ? currentPositionData.nextPositionForHome : currentPositionData.nextPosition;

    // Check if token reached home on the first move
    if (newPosition === 100 && move === 1) {
      tokenReachedHome = true;
    }

    // Iterate through moves
    for (let i = 1; i < move; i++) {
      movesToHome--;
      if (newPosition === 100) {
        if (newData?.stepsTaken + move === 56) {
          tokenReachedHome = true;
        }
        break;
      }
      const sectionKey = Object.keys(updatedJsonData).find(key => updatedJsonData[key].some(subarray => subarray.some(item => item.position === newPosition)));
      if (!sectionKey) {
        console.error("Error: Could not find the next position.");
        return;
      }
      const section = updatedJsonData[sectionKey];
      const nextPositionData = section.flat().find(item => item.position === newPosition);
      if (!nextPositionData) {
        console.error("Error: Could not find the next position data.");
        return;
      }
      newPosition = (nextPositionData.isHomeEntry && nextPositionData.homeEntryFor === newData.playerType) ? nextPositionData.nextPositionForHome : nextPositionData.nextPosition;
    }

    // Handle token reaching home
    if (tokenReachedHome) {
      removeAndReturnCurrentTokenData(updatedJsonData, currentPosition, newData, true);
      onTokenReachedHome(newData);
      updateDiceRoll(currentPlayerId, true);
      repeatTurn = true;
      if (!repeatTurn) {
        console.log('nextPlayer');
        UpdatePlayerTurn(currentPlayerId);
      }
    } else {
      if (newPosition !== 100) {
        const newPositionData = findPositionData(newPosition, updatedJsonData);
        if (newPositionData && newPositionData.tokenData.length > 0) {
          if (newPositionData.isSafe || newPositionData.isStart || newPositionData.tokenData[0].playerId === currentPlayerId) {
            newPositionData.tokenData.push({ ...newData, stepsTaken: newData.stepsTaken + move });
          } else {
            onKill(newPositionData.tokenData[0]);
            addScore(newPositionData.tokenData[0].playerId, -newPositionData.tokenData[0].stepsTaken);
            repeatTurn = true;
            newPositionData.tokenData = [{ ...newData, stepsTaken: newData.stepsTaken + move }];
          }
        } else {
          newPositionData.tokenData = [{ ...newData, stepsTaken: newData.stepsTaken + move }];
        }
        removeAndReturnCurrentTokenData(updatedJsonData, currentPosition, newData, true);
        updateDiceRoll(currentPlayerId, true)
        console.log(newPositionData, 'new position data');
        if (!repeatTurn) {
          console.log('nextPlayer');
          UpdatePlayerTurn(currentPlayerId);
        }
        addScore(newData.playerId, move);
      }
    }
    sendMapData()
    dispatch(updateGameMap(updatedJsonData))
    setGameMap(prev => {
      sendMapData({ ...prev, updatedJsonData })
      return ({ ...prev, updatedJsonData })
    });
  }

  const onKill = (tokenData) => {
    const position = initialState.find(player => player.playerId === tokenData?.playerId).startPosition;
    const updatedGameMap = { ...GameMap };

    // Check if updatedGameMap is an object and has iterable properties
    if (updatedGameMap && typeof updatedGameMap === 'object') {
      // Iterate over sections in the gameMap
      for (const sectionKey in updatedGameMap) {
        const section = updatedGameMap[sectionKey];
        // Check if section is an array
        if (Array.isArray(section)) {
          for (const subarray of section) {
            // Check if subarray is an array
            if (Array.isArray(subarray)) {
              // Iterate over items in each subarray
              for (const item of subarray) {
                if (item.position === position) {
                  // Update tokenData for the matching item
                  item.tokenData = [...item?.tokenData, tokenData];
                  break;
                }
              }
            }
          }
        }
      }
    }
    dispatch(updateGameMap(updatedJsonData))
    setGameMap(prev => {
      sendMapData({ ...prev, updatedGameMap })
      return ({ ...prev, updatedGameMap })
    });
  };

  const onTokenReachedHome = (tokenData) => {
    const playerToUpdate = initialState.find(player => player.playerId === tokenData.playerId);
    if (playerToUpdate) {
      const updatedState = initialState.map(player => {
        if (player.playerId === tokenData.playerId) {
          return { ...player, tokensReachedHome: [...player.tokensReachedHome, tokenData.tokenId], score: playerToUpdate.score + 56 };
        } else {
          return player;
        }
      });
      dispatch(updateallPlayers(updatedState));
    } else {
      console.error(`Player with playerId ${tokenData.playerId} not found.`);
    }
  }

  const addScore = (_playerId, move) => {
    const _updatedState = [...initialState];
    const playerToUpdate = _updatedState.find(player => player.playerId === _playerId);
    console.log(playerToUpdate, 'kkkkkkkkuuuuuuuuuuuuuuuuuuuuuuu')
    if (playerToUpdate) {
      const updatedState = _updatedState.map(player => {
        if (player.playerId === _playerId) {
          return { ...player, score: playerToUpdate.score + move };
        } else {
          return player;
        }
      });
      console.log(updatedState)
      dispatch(updateallPlayers(updatedState, "Add score"));
    } else {
      console.error(`Player with playerId ${_playerId} not found.`);
    }
  }



  // Utility function to find position data by position value
  function findPositionData(position, jsonData) {
    for (const sectionKey in jsonData) {
      const section = jsonData[sectionKey];
      for (const subarray of section) {
        for (const item of subarray) {
          if (item.position === position) {
            return item;
          }
        }
      }
    }
    return null;
  }



  const firstMoveOfTheToken = (playerId, moves) => {
    const playerIndex = initialState.findIndex(player => player.playerId === playerId);
    const updatedPlayer = { ...initialState[playerIndex] };
    const _payload = {
      "playerId": updatedPlayer?.playerId,
      "playerType": updatedPlayer?.playerType,
      "tokenId": updatedPlayer?.tokens[0]
    }
    _UpdateGameMap(updatedPlayer?.startPosition, moves, _payload)
    updatedPlayer.tokens = updatedPlayer.tokens.slice(1);
    const updatedState = [...initialState];
    updatedState[playerIndex] = updatedPlayer;
    // setInitalState(updatedState);
  }


  const playerMovement = (position, payload) => {
    const currentPlayer = initialState.find(player => player.isTurn && player.diceRoll !== 0);
    const filteredData = payload.filter(item => item.playerId === currentPlayer?.playerId);
    if (filteredData.length > 0) {
      _UpdateGameMap(position, currentPlayer?.diceRoll, filteredData[0])
    }
  }


  const UpdatePlayerTurn = (currentPlayerId) => {
    const updatedState = [...initialState];
    const currentPlayerIndex = updatedState.findIndex(player => player.playerId === currentPlayerId);
  
    if (currentPlayerIndex !== -1) {
      // Set all players' isTurn to false
      updatedState.forEach(player => {
        player.isTurn = false;
      });
  
      // Determine the next player's index
      let nextPlayerIndex = (currentPlayerIndex + 1) % updatedState.length;
  
      // If next player index is out of bounds, set it to 0 (first player)
      if (nextPlayerIndex >= updatedState.length) {
        nextPlayerIndex = 0;
      }
  
      // Set next player's isTurn to true
      updatedState[nextPlayerIndex].isTurn = true;
    }
    sendPlayerData(updatedState);
    dispatch(updateallPlayers(updatedState, "UpdatePlayerTurn"));
  }



  const updateDiceRoll = (currentPlayerId, makeZero = false) => {
    const updatedState = [...initialState];
  
    // Update diceRoll for the current player
    const currentPlayerIndex = updatedState.findIndex(player => player.playerId === currentPlayerId);
    if (currentPlayerIndex !== -1) {
      updatedState[currentPlayerIndex].isRolling = true; // Set isRolling to true
      if (!makeZero) {
        // Update diceRoll after 1 second if makeZero is false
        setTimeout(() => {
          const newState = [...initialState]; // Create a new copy of state
          newState[currentPlayerIndex].diceRoll = Math.floor(Math.random() * 6) + 1;
          newState[currentPlayerIndex].isRolling = false;
          sendPlayerData(newState);
          dispatch(updateallPlayers(newState, "updateDiceRoll after 0.3 sec"));; // Return the updated state
        }, 500);
      } else {
        // If makeZero is true, set diceRoll to 0 immediately
        updatedState[currentPlayerIndex].diceRoll = 0;
        updatedState[currentPlayerIndex].isRolling = false; // Set isRolling back to false
      }
    }
  
    // Set diceRoll to 0 for all other players
    for (let i = 0; i < updatedState.length; i++) {
      if (i !== currentPlayerIndex) {
        updatedState[i].diceRoll = 0;
        updatedState[i].isRolling = false; // Set isRolling to false for other players
      }
    }
    sendPlayerData(updatedState);
    dispatch(updateallPlayers(updatedState, "updateDiceRoll"));
  }
  

  // This method sets the inital state
  // const updateGameMapTokens = () => {
  //   const updatedGameMap = { ...GameMap };
  //   initialState.forEach(player => {
  //     const playerStartPosition = player.startPosition;
  //     const playerTokens = player.tokens.map(token => ({
  //       playerId: player.playerId,
  //       playerType: player.playerType,
  //       tokenId: token,
  //       stepsTaken: 0
  //     }));

  //     for (const sectionKey in updatedGameMap) {
  //       const section = updatedGameMap[sectionKey];
  //       for (let i = 0; i < section.length; i++) {
  //         const subarray = section[i];
  //         for (let j = 0; j < subarray.length; j++) {
  //           const item = subarray[j];
  //           if (item.position === playerStartPosition) {
  //             item.tokenData = playerTokens;
  //             break;
  //           }
  //         }
  //       }
  //     }
  //   });

  //   setGameMap((prev) => {
  //     return {
  //       ...prev,
  //       updatedGameMap
  //     }
  //   });
  // };

  const diceRef = useRef(null);
  useEffect(() => {
    diceRef.current?.play();
    diceRef.current?.play(1, 200);
  }, [currentPlayerData?.isRolling])

  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}
    >

      <View
        style={{
          ...styles.headerSection
        }}
      >
        <TouchableOpacity>
          <BackButton color='#d2d2d2' />
        </TouchableOpacity>

        <TouchableOpacity>
          <SettingIcon />
        </TouchableOpacity>
      </View>


      <View
        style={{
          ...styles.timerSection
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3
          }}
        >
          <CoinsIcon />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontFamily: "BungeeSpiceRegular"
            }}
          >
            ₹100
          </Text>
        </View>
        <Timer timeInMinutes={2} onTimeOver={() => { console.log('Time Over') }} />
      </View>

      {
        (GameMap && initialState.length > 0) && (
          <>
            {/* Game Board */}
            <View
              style={{
                ...styles.mapSection,
                width: width,
              }}
            >
              {/* Top section */}
              <View
                style={{
                  ...styles.topSection,
                }}
              >
                {/* Player 1 section */}
                <PlayerBox
                  data={initialState.length == 4 ? initialState[0] : initialState[0]}
                  onDiceRoll={updateDiceRoll}
                  onTokenOut={(playerId, _diceRoll) => {
                    firstMoveOfTheToken(playerId, _diceRoll)
                  }}
                />

                {/* Boxes section */}
                <View
                  style={{
                    ...styles.firstSectionContainer,
                  }}
                >
                  {
                    GameMap.firstSection.map((item) => {
                      return (
                        <>
                          <View
                            style={{
                              ...styles.firstSection
                            }}
                          >
                            {
                              item.map((subItem) => {
                                return (
                                  <>
                                    <TokenBox
                                      data={subItem}
                                      onPress={playerMovement}
                                    />
                                  </>
                                )
                              })
                            }
                          </View>
                        </>
                      )
                    })
                  }
                </View>

                {/* Player 2 section */}
                <PlayerBox
                  data={initialState.length == 4 ? initialState[1] : {
                    "playerType": "PLAYER-2"
                  }}
                  onDiceRoll={updateDiceRoll}
                  onTokenOut={(playerId, _diceRoll) => {
                    firstMoveOfTheToken(playerId, _diceRoll)
                  }}
                />
              </View>


              {/* Mid section */}
              <View
                style={{
                  ...styles.midSection,
                  // height: width / 4.5,
                }}
              >
                {/* Boxes section */}
                <View
                  style={{
                    ...styles.SecondSectionContainer
                  }}
                >
                  {
                    GameMap.secondSection.map((item) => {
                      return (
                        <>
                          <View
                            style={{
                              ...styles.secondSection
                            }}
                          >
                            {
                              item.map((subItem) => {
                                return (
                                  <>
                                    <TokenBox
                                      data={subItem}
                                      onPress={playerMovement}
                                    />
                                  </>
                                )
                              })
                            }
                          </View>
                        </>
                      )
                    })
                  }
                </View>


                {/* Home Section */}
                <View
                  style={{
                    ...styles.homeSection
                  }}
                >
                  <HomeBox
                    data={initialState}
                  />
                </View>

                <View>
                  {/* Boxes section */}
                  <View
                    style={{
                      ...styles.SecondSectionContainer
                    }}
                  >
                    {
                      GameMap.thirdSection.map((item) => {
                        return (
                          <>
                            <View
                              style={{
                                ...styles.secondSection
                              }}
                            >
                              {
                                item.map((subItem) => {
                                  return (
                                    <>
                                      <TokenBox
                                        data={subItem}
                                        onPress={playerMovement}
                                      />
                                    </>
                                  )
                                })
                              }
                            </View>
                          </>
                        )
                      })
                    }
                  </View>
                </View>
              </View>


              {/* Bottom section */}
              <View
                style={{
                  ...styles.topSection,
                  width: width
                }}
              >
                {/* Player 4 section */}
                <PlayerBox
                  data={initialState.length == 4 ? initialState[3] : {
                    "playerType": "PLAYER-4"
                  }}
                  onDiceRoll={updateDiceRoll}
                  onTokenOut={(playerId, _diceRoll) => {
                    firstMoveOfTheToken(playerId, _diceRoll)
                  }}
                />

                {/* Boxes section */}
                <View
                  style={{
                    ...styles.firstSectionContainer,
                  }}
                >
                  {
                    GameMap.fourthSection.map((item) => {
                      return (
                        <>
                          <View
                            style={{
                              ...styles.firstSection
                            }}
                          >
                            {
                              item.map((subItem) => {
                                return (
                                  <>
                                    <TokenBox
                                      data={subItem}
                                      onPress={playerMovement}
                                    />
                                  </>
                                )
                              })
                            }
                          </View>
                        </>
                      )
                    })
                  }
                </View>

                {/* Player 3 section */}
                <PlayerBox
                  data={initialState.length == 4 ? initialState[2] : initialState[1]}
                  onDiceRoll={updateDiceRoll}
                  onTokenOut={(playerId, _diceRoll) => {
                    firstMoveOfTheToken(playerId, _diceRoll)
                  }}
                />
              </View>
            </View>

            {
              currentPlayerData && (
                <>
                  <View
                    style={{
                      ...styles.footer
                    }}
                  >
                    {/* Chat  */}
                    <TouchableOpacity
                      style={{
                        elevation: 10
                      }}
                    >
                      <Chat />
                    </TouchableOpacity>

                    {/* Roll Button */}
                    <View
                      style={{
                        ...styles.diceButton
                      }}
                    >
                      <View
                        disabled={!currentPlayerData?.isTurn || currentPlayerData.diceRoll != 0}

                      >
                        {
                          currentPlayerData.isTurn == true ?
                            <View
                              style={{
                                ...styles.innerCircle
                              }}
                            >
                              {
                                currentPlayerData?.isRolling == true ?
                                  <AnimatedLottieView
                                    source={require('../../../assets/Animation/Dice.json')}
                                    ref={diceRef}
                                    autoplay
                                    loop
                                    style={{
                                      width: 180,
                                      height: 180
                                    }}
                                  /> :
                                  currentPlayerData.diceRoll == 0 && currentPlayerData.isTurn == true ?
                                    <TouchableOpacity
                                      onPress={() => {
                                        updateDiceRoll(currentPlayerData?.playerId, false)
                                      }}
                                      style={{
                                        ...styles.rollButton
                                      }}
                                    >
                                      <Text
                                        style={{
                                          ...styles.rollText
                                        }}
                                      >
                                        Roll
                                      </Text>
                                    </TouchableOpacity> :
                                    <View>
                                      {
                                        currentPlayerData.diceRoll && (<>
                                          <Image
                                            source={diceImage(currentPlayerData?.diceRoll)}
                                            style={{
                                              borderWidth: 0,
                                              width: 55,
                                              height: 55
                                            }}
                                          />
                                        </>)
                                      }
                                    </View>
                              }

                            </View>
                            :
                            <View
                              style={{
                                ...styles.innerCircle
                              }}
                            >
                              <Text
                                style={{
                                  ...styles.rollText
                                }}
                              >
                                Wait !
                              </Text>
                            </View>
                        }
                      </View>
                    </View>

                    {/* Skip turn */}
                    <TouchableOpacity
                      style={{
                        elevation: 5
                      }}
                    >
                      <SkipTurn />
                    </TouchableOpacity>
                  </View>
                </>
              )
            }
          </>
        )
      }
      <Loader show={waitingForPlayers} msg={"Waiting for other players to join..."} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#141d37",
    marginTop: 50
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
  mapSection: {
    flexDirection: 'column',
    // gap: 0,
    alignContent: 'center',
    alignItems: "center",
    justifyContent: 'flex-start',
    backgroundColor: '#5155b3',
    elevation: 15,
    borderRadius: 5,
    top: -30
  },

  topSection: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'green',
    width: '100%',
    justifyContent: 'center',
  },
  playerBox: {
    // width: 120,
    // height: 120,
    width: '40%',
    borderWidth: 0.2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstSectionContainer: {
    flexDirection: 'row'
  },
  firstSection: {
    flexDirection: 'column'
  },
  box: {
    width: 25,
    height: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: "center",
    justifyContent: 'center'
  },
  SecondSectionContainer: {
    flexDirection: 'column',
  },
  secondSection: {
    flexDirection: 'row'
  },
  homeSection: {

  },
  midSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: '#5155b3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: 'center',
    gap: 40,
    alignItems: "center"
  },
  diceButton: {
    width: 100,
    height: 100,
    // borderWidth : 1,
    // borderColor : '#fff',
    top: -40,
    borderRadius: 100,
    backgroundColor: '#6f74bd',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#5155b3",
    justifyContent: "center",
    alignItems: "center",
  },
  rollButton: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#5155b3",
    justifyContent: "center",
    alignItems: "center"
  },
  rollText: {
    color: '#fff',
    fontFamily: 'BungeeSpiceRegular',
    fontSize: 20,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
  },
  timerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5155b3",
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    gap: 15,
    padding: 5,
    borderRadius: 5
  }
});