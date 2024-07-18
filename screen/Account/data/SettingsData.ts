export interface SettingsOption {
  title: string;
  isChecked: boolean;
}

export const settingsData: SettingsOption[] = [
  { title: "Sound", isChecked: true },
  { title: "Notification", isChecked: true },
  { title: "Vibration", isChecked: true },
  { title: "Music", isChecked: true },
];
