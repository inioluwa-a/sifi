import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface SegmentedControlProps {
  options: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
}

export function SegmentedControl({ options, selectedIndex, onChange }: SegmentedControlProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.segment,
            selectedIndex === index && [styles.activeSegment, { backgroundColor: colors.card, shadowColor: colors.text }]
          ]}
          onPress={() => onChange(index)}
        >
          <ThemedText style={[
            styles.text,
            selectedIndex === index ? { color: colors.primary, fontWeight: '700' } : { color: '#64748B' }
          ]}>
            {option}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 12,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeSegment: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
  },
});
