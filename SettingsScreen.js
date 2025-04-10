import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function SettingsScreen() {
  const [goal, setGoal] = useState(16);

  const setReminder = async () => {
    await Notifications.scheduleNotificationAsync({
      content: { title: 'Start Fasting!', body: 'Time to begin your fasting session.' },
      trigger: { seconds: 10 }, // For demo purposes, replace with real time later
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Fasting Goal: {goal} hours</Text>
      <Button title="Set 16-Hour Goal" onPress={() => setGoal(16)} />
      <Button title="Set Reminder" onPress={setReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});