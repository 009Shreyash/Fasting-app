import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FastingScreen() {
  const [fasting, setFasting] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (fasting) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [fasting]);

  const toggleFast = () => {
    setFasting(prev => !prev);
    if (!fasting) setTime(0);
  };

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fasting ? 'Fasting In Progress' : 'Fast Paused'}</Text>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <Button title={fasting ? 'End Fast' : 'Start Fast'} onPress={toggleFast} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 10 },
  timer: { fontSize: 40, fontWeight: 'bold', marginBottom: 20 }
});

