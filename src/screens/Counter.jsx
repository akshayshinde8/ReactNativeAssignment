import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="counter" size={28} color={'#007AFF'} />
        <Text style={styles.headerTitle}>Counter App</Text>
      </View>

      <View style={styles.counterBox}>
        <Text style={styles.count}>{count}</Text>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[
            styles.btn,
            styles.decrementBtn,
            count === 0 && styles.disabledBtn,
          ]}
          onPress={() => count > 0 && setCount(count - 1)}
          disabled={count === 0}
        >
          <Ionicons name="remove" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.incrementBtn]}
          onPress={() => setCount(count + 1)}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 10,
    color: '#007AFF',
  },
  counterBox: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    shadowColor: '#007AFF',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginBottom: 40,
  },
  count: {
    fontSize: 40,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  incrementBtn: {
    backgroundColor: '#28a745',
  },
  decrementBtn: {
    backgroundColor: '#dc3545',
  },
  disabledBtn: {
    backgroundColor: '#bbb',
  },
});
