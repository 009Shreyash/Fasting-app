// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⏳ Fasting In Progress</Text>
      <Text style={styles.timer}>12:35:47</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💧 Water Intake</Text>
        <Text style={styles.cardValue}>5 / 8 glasses</Text>
        <Button title="Add Glass" onPress={() => {}} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Fasting Streak</Text>
        <Text style={styles.cardValue}>3 days</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 10 },
  timer: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: {
    backgroundColor: '#f0f4f7',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: '500', marginBottom: 6 },
  cardValue: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
});
