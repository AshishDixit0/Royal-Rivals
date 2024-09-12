import { Colors } from "@/constants/Colors"; // Make sure this path is correct

interface Image {
  name: string | Number; // Corrected property name
  image: any;
}

export class BackgroundImages {
  private static images: Array<Image> = [
    {
      name: Colors.Green,
      image: require("../assets/images/Green.png"),
    },
    {
      name: Colors.Red,
      image: require("../assets/images/red.png"),
    },
    {
      name: Colors.Blue,
      image: require("../assets/images/Blue.png"),
    },
    {
      name: Colors.Yellow,
      image: require("../assets/images/yellow.png"),
    },
    {
      name: 1,
      image: require("../assets/images/dice1.png"),
    },
    {
      name: 2,
      image: require("../assets/images/dice2.png"),
    },
    {
      name: 3,
      image: require("../assets/images/dice3.png"),
    },
    {
      name: 4,
      image: require("../assets/images/dice4.png"),
    },
    {
      name: 5,
      image: require("../assets/images/dice5.png"),
    },
    {
      name: 6,
      image: require("../assets/images/dice6.png"),
    },
  ];

  static GetImage = (name: String | Number) => {
    const found = BackgroundImages.images.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
