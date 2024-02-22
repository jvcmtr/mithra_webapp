import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jvcmtr.github.io/mithra_data/data.json');
      if (!response.ok) {
        throw new Error('Erro no github');
      }
      const d = await response.json();
      setData(d);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        {data? JSON.stringify(data) : "loading"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
