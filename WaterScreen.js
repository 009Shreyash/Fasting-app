// WaterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function WaterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💧 Water Intake</Text>
      <Text style={styles.counter}>{count} / 8 glasses</Text>
      <Button title="Add Glass" onPress={() => setCount(c => Math.min(8, c + 1))} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 10 },
  counter: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});
