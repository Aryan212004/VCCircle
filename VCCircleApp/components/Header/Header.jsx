import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  spacing,
  colors,
  typography,
  borderRadius,
} from '../../constants/theme';
import LocationBadge from '../ui/LocationBadge';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = React.useState('IND');

  const onSubscribePress = () => {
    navigation.navigate('Subscribe');
  };

  const toggleLocation = () => {
    setSelectedLocation(prev => (prev === 'IND' ? 'MEA' : 'IND'));
  };

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: 'black',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  subscribeButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.sm,
  },
  subscribeText: {
    color: colors.white,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.medium,
  },
  locationBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.sm,
  },
  locationText: {
    color: colors.white,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    marginHorizontal: 2,
  },
});

export default Header;
