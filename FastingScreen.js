// FastingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function FastingScreen() {
  const [fasting, setFasting] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (fasting) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [fasting]);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fasting ? 'Fasting in Progress' : 'Fast Paused'}</Text>
      <Text style={styles.timer}>{formatTime(timer)}</Text>
      <Button title={fasting ? 'End Fast' : 'Start Fast'} onPress={() => {
        setFasting(prev => !prev);
        if (!fasting) setTimer(0);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 16 },
  timer: { fontSize: 40, fontWeight: 'bold', marginBottom: 20 }
});
