import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Note = ({ note, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onDelete}>
      <View style={styles.noteContainer}>
        <Text>{note}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
});

export default Note;
