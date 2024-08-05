import { Colors } from "@/constants/Colors"; // Make sure this path is correct

interface Image {
  name: string | Number; // Corrected property name
  image: any;
}

export class BgImages {
  private static images: Array<Image> = [
    {
      name: Colors.Green,
      image: require("../assets/images/green-bg.png"),
    },
    {
      name: Colors.Red,
      image: require("../assets/images/red-bg.png"),
    },
    {
      name: Colors.Blue,
      image: require("../assets/images/blue-bg.png"),
    },
    {
      name: Colors.Yellow,
      image: require("../assets/images/yellow-bg.png"),
    },
   
  ];

  static GetImage = (name: String | Number) => {
    const found = BgImages.images.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
