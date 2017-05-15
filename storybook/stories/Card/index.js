/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';
/* eslint-enable import/no-extraneous-dependencies */

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 5,
  },
});

export default function Card({ image, width, height }) {
  return (
    <View style={[styles.wrapper, { width, height }]}>
      <Image source={{ uri: image }} style={[styles.image, { width, height }]} />
    </View>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};