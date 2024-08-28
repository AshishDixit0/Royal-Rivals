import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { FooterIcons, Heart, Star, Token } from './CommonSVG'

interface TokenBoxProps {
    data: any;
    onPress: any;
}

export default function TokenBox({ data, onPress }: TokenBoxProps) {
  const backgroundColor = (data: any) => {
    if (data.isStart || data?.isHomePosition) {
      switch (data?.startFor || data?.homeFor) {
        case "PLAYER-1": return "#50C878"
        case "PLAYER-2": return "#FFC300"
        case "PLAYER-3": return "#FB6962"
        case "PLAYER-4": return "#6495ED"
        default: return "#000"
      }
    }
    else if (data?.isSafe) return "#fff"

    else return "#393f87"
  }


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
      case 4: return 13
      case 5: return 10
    }
  }

  return (
    <>
      <TouchableOpacity
        id={data?.position}
        style={{
          width: 25,
          height: 26,
          // borderWidth: 0.5,
          // borderColor: '#393f87',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          margin: 0.3,
          borderWidth: 1,
          marginVertical: 1,
          backgroundColor: backgroundColor(data)
        }}
        onPress={() => {
          console.log(data, 'kkkkkkkkkk')
          if (data?.tokenData?.length > 0) {
            onPress(data?.position, data?.tokenData)
          }
        }}
        disabled={data?.tokenData?.length == 0 ? true : false}
      >
        <Text
          style={{
            fontSize: 8
          }}
        >
          {/* {data?.position + "/" + data?.nextPosition} */}
        </Text>
        {data?.isStart && (<View
          style={{
            position: 'absolute'
          }}
        >
          <FooterIcons color={'#fff'} name={"Home"} />
        </View>)}
        {/* {data?.isSafe && (<Star />)} */}

        <View
          style={{
            // position: 'relative',
            // zIndex: 2,
            // flexDirection: 'row',
            gap: -4,
            top: -6,
            flexWrap: 'wrap',
            // width: 25,
            alignItems: 'center',
            justifyContent: "center",
          }}
        >
          {
            data?.tokenData ? data?.tokenData?.map((item: any, index: number) => {
              return (<>
                <Token
                  color={tokenColor(item?.playerType)}
                  width={calculateHeight(data?.tokenData?.length)}
                  height={calculateHeight(data?.tokenData?.length)}
                />
              </>)
            }) : null
          }
        </View>

      </TouchableOpacity>
    </>
  )
}
