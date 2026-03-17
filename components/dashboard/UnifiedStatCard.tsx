import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function UnifiedStatCard() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  // Colors from the new design system
  const cardBg = colors.primary;
  const accentColor = '#60DBC5';
  const dangerAccent = '#FF6B6B';
  const yellowAccent = Colors.light.warning; // Amber accent

  return (
    <View style={[styles.card, { backgroundColor: cardBg }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconBox}>
            <IconSymbol name="account.balance" size={16} color="#fff" />
          </View>
          <ThemedText style={styles.headerTitle}>NET PROFIT</ThemedText>
        </View>
        <View style={styles.tag}>
          <ThemedText style={styles.tagText}>THIS MONTH</ThemedText>
        </View>
      </View>

      <ThemedText style={styles.mainValue}>₦789,200</ThemedText>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <View style={styles.statColumn}>
          <View style={styles.labelRow}>
            <IconSymbol name="trending.up" size={12} color={accentColor} />
            <ThemedText style={styles.statLabel}>TOTAL INCOME</ThemedText>
          </View>
          <ThemedText style={styles.statValue}>₦1,240,000</ThemedText>
          <ThemedText style={[styles.trendText, { color: accentColor }]}>+12% vs last month</ThemedText>
        </View>

        <View style={styles.statColumn}>
          <View style={styles.labelRow}>
            <IconSymbol name="trending.down" size={12} color={dangerAccent} />
            <ThemedText style={styles.statLabel}>TOTAL EXPENSES</ThemedText>
          </View>
          <ThemedText style={[styles.statValue, { color: yellowAccent }]}>₦450,800</ThemedText>
          <ThemedText style={[styles.trendText, { color: dangerAccent }]}>-5% vs last month</ThemedText>
        </View>
      </View>

      <View style={styles.decoration} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  mainValue: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statColumn: {
    gap: 8,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '700',
  },
  decoration: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    zIndex: -1,
  },
});
