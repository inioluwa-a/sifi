import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface SpendingProgressProps {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

export function SpendingProgress({ label, value, percentage, color }: SpendingProgressProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.label}>{label}</ThemedText>
        <ThemedText style={styles.value}>{value}</ThemedText>
      </View>
      <View style={[styles.barBg, { backgroundColor: colors.background }]}>
        <View style={[styles.barFill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
  },
  barBg: {
    height: 8,
    borderRadius: 4,
    width: '100%',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
});
