import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function WaterScreen() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const scheduleReminder = async () => {
      await Notifications.scheduleNotificationAsync({
        content: { title: 'Hydration Time', body: 'Remember to drink water!' },
        trigger: { seconds: 3600, repeats: true },
      });
    };
    scheduleReminder();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake</Text>
      <Text>{count} / 8 glasses</Text>
      <Button title="Add Glass" onPress={() => setCount(c => Math.min(8, c + 1))} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});