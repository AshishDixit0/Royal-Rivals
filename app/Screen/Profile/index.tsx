import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;

interface GameImagesType {
  ludo: any;
  snake: any;
}

const gamesData = [
  { id: 1, name: "Ludo Supreme League", result: "Won", type: "ludo" },
  { id: 2, name: "Snakes & Ladder League", result: "Lost", type: "snake" },
  { id: 3, name: "Ludo Supreme League", result: "Won", type: "ludo" },
  { id: 4, name: "Ludo Supreme League", result: "Won", type: "ludo" },
  { id: 5, name: "Ludo Supreme League", result: "Won", type: "ludo" },
];

const gameImages: GameImagesType = {
  ludo: require("@/assets/images/ludo.png"),
  snake: require("@/assets/images/snake.png"),
};

export function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleImageUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission to access gallery is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage((result as any).assets[0]);
      toggleModal();
    }
  };

  const handleCameraAccess = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera is required!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage((result as any).assets[0]);
      toggleModal();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.idContainer}>
          <Text style={styles.idText}>ID- BC78XXXXXXXX7</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            {selectedImage ? (
              <Image
                source={{ uri: (selectedImage as any).uri }}
                style={styles.profileIcon}
              />
            ) : (
              <View style={styles.iconWrapper}>
                <FontAwesome
                  name="user"
                  size={scale(50)}
                  color="white"
                  style={styles.profileIcon}
                />
                <View style={styles.editIconWrapper}>
                  <TouchableOpacity onPress={toggleModal}>
                    <FontAwesome
                      name="edit"
                      size={scale(30)}
                      color="white"
                      style={styles.editIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <Text style={styles.phoneText}>Ph. 7876XXXXXX7</Text>
          <View style={styles.divider} />
          <View style={styles.statsRow}>
            <Text style={styles.statText}>Games Played {gamesData.length}</Text>
            <Text style={styles.statText}>
              Winnings{" "}
              {gamesData.filter((game) => game.result === "Won").length}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Game Statistics</Text>
        <View style={styles.statsRow}>
          <Text style={styles.totalGamesText}>
            Total Games Played: {gamesData.length}
          </Text>
          <Text style={styles.viewAllText}>view all</Text>
        </View>
        <ScrollView style={styles.scrollableGames}>
          {gamesData.map((game) => (
            <View key={game.id} style={styles.gameItem}>
              <Image
                source={(gameImages as any)[game.type]}
                style={styles.gameIcon}
              />
              <Text style={styles.gameText}>{game.name}</Text>
              <Text style={styles.gameResult}>{game.result}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.modalScroll}>
              <View style={styles.avatarsContainer}>
                {[...Array(6)].map((_, index) => (
                  <TouchableOpacity key={index} style={styles.avatarItem}>
                    <FontAwesome
                      name="picture-o"
                      size={scale(40)}
                      color="white"
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <Text style={styles.modalTitle}>Choose an Avatar</Text>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleImageUpload}
              >
                <FontAwesome name="photo" size={scale(24)} color="white" />
                <Text style={styles.modalButtonText}>
                  Add a photo from gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCameraAccess}
              >
                <FontAwesome name="camera" size={scale(24)} color="white" />
                <Text style={styles.modalButtonText}>Go to camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
