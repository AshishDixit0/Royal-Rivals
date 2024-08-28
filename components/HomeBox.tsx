import React from 'react';
import { View } from 'react-native';
import { Token, Triangle } from './CommonSVG';

interface HomeBoxProps {
    data: any;
}

export default function HomeBox({ data }: HomeBoxProps) {

  const tokenColor = (playerType: string) => {
    switch (playerType) {
      case "PLAYER-1": return "#50C878"
      case "PLAYER-2": return "#FFC300"
      case "PLAYER-3": return "#FB6962"
      case "PLAYER-4": return "#6495ED"
      default: return "#000"
    }
  }

  const calculateHeight = (intg: number) => {
    switch (intg) {
      case 1: return 20
      case 2: return 16
      case 3: return 14
      case 4: return 12
      case 5: return 10
    }
  }
  return (
    <View
      style={{
        width: 75,
        height: 75,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // transform: [{ rotate: '-45deg' }],
        justifyContent: 'center',
        alignItems: "center",
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <View style={{
        width: 100,
        height: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        transform: [{ rotate: '-45deg' }],
        justifyContent: "flex-end"
      }}>
        <View
          style={{
            width: '50%',
            height: '50%',
            borderColor: '#fff',
            backgroundColor: tokenColor(data[0]?.playerType),
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >
          <View
            style={{
              // minWidth : '50%',
              flexWrap: 'wrap',
              transform: [{ rotate: '45deg' }],
              position: 'absolute',
              left: 7,
              height: '75%'
            }}
          >
            {
              data[0]?.tokensReachedHome?.map((tokens: any) => {
                return <>
                  <Token
                    color={tokenColor(data[0]?.playerType || 'PLAYER-1')}
                    width={calculateHeight(data[0]?.tokensReachedHome?.length || 4)}
                    height={calculateHeight(data[0]?.tokensReachedHome?.length || 4)}
                  />
                </>
              })
            }
          </View>
        </View>

        <View
          style={{
            width: '50%',
            height: '50%',
            borderColor: '#fff',
            backgroundColor: data?.length == 4 ? tokenColor(data[1]?.playerType) : tokenColor("PLAYER-2"),
            justifyContent: "flex-end",

          }}
        >
          {
            data?.length == 4 ? <>
              <View
                style={{
                  // minWidth : '50%',
                  flexWrap: 'wrap',
                  transform: [{ rotate: '0deg' }],
                  position: 'absolute',
                  left: 7,
                  height: '75%'
                }}
              >
                {
                  data[1]?.tokensReachedHome?.map((tokens: any) => {
                    return <>
                      <View
                        style={{
                          transform: [{ rotate: '45deg' }],
                        }}
                      >
                        <Token
                          color={tokenColor(data[1]?.playerType || 'PLAYER-1')}
                          width={calculateHeight(data[1]?.tokensReachedHome?.length || 4)}
                          height={calculateHeight(data[1]?.tokensReachedHome?.length || 4)}
                        />
                      </View>
                    </>
                  })
                }
              </View>
            </> : null

          }
        </View>

        <View
          style={{
            width: '50%',
            height: '50%',
            borderColor: '#fff',
            backgroundColor: data?.length == 4 ? tokenColor(data[3]?.playerType) : tokenColor('PLAYER-4')
          }}
        >
          <View
            style={{
              // minWidth : '50%',
              flexWrap: 'wrap',
              transform: [{ rotate: '45deg' }],
              position: 'absolute',
              left: 19,
              top: 5,
              height: '60%'
            }}>
            {
              data[data?.length == 4 ? 3 : 1]?.tokensReachedHome?.map((tokens: any) => {
                return <>
                  <Token
                    color={tokenColor(data[data?.length == 4 ? 3 : 1]?.playerType)}
                    width={calculateHeight(data[data?.length == 4 ? 3 : 1]?.tokensReachedHome?.length)}
                    height={calculateHeight(data[data?.length == 4 ? 3 : 1]?.tokensReachedHome?.length)}
                  />
                </>
              })
            }
          </View>
        </View>

        <View
          style={{
            width: '50%',
            height: '50%',
            borderColor: '#fff',
            backgroundColor: data?.length == 4 ? tokenColor(data[2]?.playerType) : tokenColor(data[1]?.playerType),
            borderRadius: 1
          }}
        >
          <View
            style={{
              flexWrap: 'wrap',
              transform: [{ rotate: '0deg' }],
              position: 'absolute',
              top: 5,
              height: '60%'
            }}
          >
            {
              data?.length == 4 ? <>
                {
                  data[2]?.tokensReachedHome?.map((tokens: any) => {
                    return <>
                      <View
                        style={{
                          transform: [{ rotate: '45deg' }],
                        }}
                      >
                        <Token
                          color={tokenColor(data[2]?.playerType)}
                          width={calculateHeight(data[2]?.tokensReachedHome?.length)}
                          height={calculateHeight(data[2]?.tokensReachedHome?.length)}
                        />
                      </View>
                    </>
                  })
                }
              </> : <>
                {
                  data[1]?.tokensReachedHome.map((tokens: any) => {
                    return <>
                      <View
                        style={{
                          transform: [{ rotate: '45deg' }],
                        }}
                      >
                        <Token
                          color={tokenColor(data[1]?.playerType)}
                          width={calculateHeight(data[1]?.tokensReachedHome?.length || 4)}
                          height={calculateHeight(data[1]?.tokensReachedHome?.length || 4)}
                        />
                      </View>
                    </>
                  })
                }
              </>

            }
          </View>
        </View>
      </View>
    </View>
  );
}
