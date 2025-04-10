import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [timer, setTimer] = useState(0);
  const [water, setWater] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fasting Timer</Text>
      <Text style={styles.timer}>{formatTime(timer)}</Text>
      <Text style={styles.title}>Water Intake</Text>
      <Text>{water} / 8 glasses</Text>
      <Text style={styles.title}>Progress Summary</Text>
      <Text>3-Day Streak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 20 },
  timer: { fontSize: 48, fontWeight: 'bold', marginVertical: 20 }
});

console.log("HomeScreen rendered");