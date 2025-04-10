// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Fasting Goal:</Text>
        <Text style={styles.value}>16 hours</Text>
        <Button title="Change Goal" onPress={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Daily Reminder:</Text>
        <Button title="Set Reminder" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  section: {
    marginBottom: 30,
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 10,
  },
  label: { fontSize: 16, marginBottom: 6 },
  value: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
});
