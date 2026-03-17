import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface TaxProjectionCardProps {
  liability: string;
  goal: string;
}

export function TaxProjectionCard({ liability, goal }: TaxProjectionCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View style={[styles.iconBox, { backgroundColor: `${colors.warning}1A` }]}>
          <IconSymbol name="receipt" size={20} color={colors.warning} />
        </View>
        <ThemedText style={styles.title}>Tax Projection</ThemedText>
      </View>

      <View style={styles.content}>
        <View>
          <ThemedText style={styles.label}>ESTIMATED LIABILITY</ThemedText>
          <ThemedText style={[styles.value, { color: colors.warning }]}>{liability}</ThemedText>
        </View>
        <View style={styles.divider} />
        <View>
          <ThemedText style={styles.label}>MONTHLY SAVING GOAL</ThemedText>
          <ThemedText style={styles.value}>{goal}</ThemedText>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: colors.warning }]}>
        <ThemedText style={styles.buttonText}>Set Aside Now</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    gap: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
