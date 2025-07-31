import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HamburgerButton from '../ui/HamburgerButton';
import {
  spacing,
  colors,
  typography,
  borderRadius,
} from '../../constants/theme';

const MainHeader = ({ onMenuPress }) => {

  return (
    <View style={styles.container}>
      <HamburgerButton onPress={onMenuPress} />
    </View>
  );
};

const styles = StyleSheet.create({

  logo: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    letterSpacing: 1,
  },
});

export default MainHeader;
