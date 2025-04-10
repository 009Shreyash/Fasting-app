import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuoteScreen() {
  const quote = "Don't limit your challenges. Challenge your limits.";
  return (
    <View style={quoteStyles.container}>
      <Text style={quoteStyles.title}>✨ Quote of the Day</Text>
      <Text style={quoteStyles.quote}>{quote}</Text>
    </View>
  );
}

const quoteStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  quote: { fontSize: 20, fontStyle: 'italic', textAlign: 'center' }
});