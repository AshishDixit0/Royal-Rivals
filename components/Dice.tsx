import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BackgroundImages } from '@/helpers/getIcons';

interface DiceProps {
    color: string;
    rotate: any;
    player: any;
    data: any;
}

const Dice = React.memo(({ color, rotate, player, data }: DiceProps) => {

    const playerIcon = BackgroundImages.getImages(color);

    return (
        <View style={[styles.flexRow, { transform: [{ scaleX: rotate ? -1 : 1 }] }]}>
            <View style={styles.border1}>
                <View
                    style={styles.linearGradient}
                >
                    <View style={styles.tokenContainer}>
                        {playerIcon && (
                            <Image source={playerIcon} style={styles.tokenIcon} />
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.border2}></View>
        </View>
    );
});

const styles = StyleSheet.create({
    flexRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    border1: {
    },
    border2: {
        // borderWidth: 3,
        padding: 1,
        // backgroundColor: '#aac8ab',
        // borderRadius: 10,
        borderLeftWidth: 3,
        // borderColor: '#aac8ab'
    },
    linearGradient: {},
    tokenIcon: {
        width: 30,
        height: 35
    },
    tokenContainer: {
        paddingHorizontal: 3
    }
});

export default Dice;


// https://cdn.buymeacoffee.com/uploads/rewards/2024-07-10/2/170309_Groww_Clone.zip

// https://cdn.buymeacoffee.com/uploads/rewards/2024-07-20/2/17096_Ludo_Clone.zip

// https://cdn.buymeacoffee.com/uploads/rewards/2024-07-10/2/170905_Reelzzz.zip