import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CardComponent from "@/components/SettingsCards";
import { settingsData } from "../data/SettingsData";
import { styles } from "./styles";

const Settings: React.FC = () => {
  const [settings, setSettings] = useState(settingsData);

  const toggleCheckbox = (index: number) => {
    const newSettings = [...settings];
    newSettings[index].isChecked = !newSettings[index].isChecked;
    setSettings(newSettings);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.contentContainer}>
          {settings.map((setting, index) => (
            <CardComponent
              key={index}
              title={setting.title}
              isChecked={setting.isChecked}
              onPress={() => toggleCheckbox(index)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
