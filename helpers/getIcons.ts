import { diceColors } from "@/constants/Colors";

interface Image {
    name: string | number;
    image: any;
}

export class BackgroundImages {
    private static images: Image[] = [
        {
            name: diceColors.green,
            image: require('@/assets/tokens/green.png')
        },
        {
            name: diceColors.blue,
            image: require('@/assets/tokens/blue.png')
        },
        {
            name: diceColors.red,
            image: require('@/assets/tokens/red.png')
        },
        {
            name: diceColors.yellow,
            image: require('@/assets/tokens/yellow.png')
        },
    ] 

    static getImages = (name: string): any => {

        const imagePlayer = BackgroundImages.images.find(image => image.name === name);
        console.log('this is the image: ', imagePlayer);
        
        return imagePlayer?.image;
    }
}