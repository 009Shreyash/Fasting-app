import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ProgressScreen() {
  const [weightData, setWeightData] = useState(Array(30).fill(null));
  const [currentWeight, setCurrentWeight] = useState('');
  const [dayIndex, setDayIndex] = useState(0);

  const handleAddWeight = () => {
    if (dayIndex < 30 && currentWeight) {
      const updated = [...weightData];
      updated[dayIndex] = parseFloat(currentWeight);
      setWeightData(updated);
      setDayIndex(dayIndex + 1);
      setCurrentWeight('');
    }
  };

  const filteredData = weightData.filter((w) => w !== null);
  const labels = filteredData.map((_, i) => `Day ${i + 1}`);

  return (
    <ScrollView contentContainerStyle={progressStyles.container}>
      <Text style={progressStyles.title}>📉 30-Day Weight Tracker</Text>

      <TextInput
        style={progressStyles.input}
        placeholder="Enter today's weight (kg)"
        keyboardType="numeric"
        value={currentWeight}
        onChangeText={setCurrentWeight}
      />
      <Button title="Save Weight" onPress={handleAddWeight} />

      {filteredData.length > 0 && (
        <LineChart
          data={{
            labels,
            datasets: [{ data: filteredData }]
          }}
          width={Dimensions.get('window').width - 32}
          height={220}
          yAxisSuffix="kg"
          chartConfig={{
            backgroundColor: '#1e2923',
            backgroundGradientFrom: '#08130D',
            backgroundGradientTo: '#1e2923',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 }
          }}
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      )}

      <Text>Day: {dayIndex} / 30</Text>
    </ScrollView>
  );
}

const progressStyles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '90%',
    borderRadius: 6
  }
});