import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

export function UnifiedStatCard() {
  // Specific colors from the design reference image
  const cardBg = '#00425A'; // Deep teal from image
  const accentColor = '#60DBC5'; // Mint/cyan accent for income
  const dangerAccent = '#FF6B6B'; // Red accent for expenses
  const yellowAccent = '#FFB800'; // Yellow for expenses amount

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

      {/* Decorative background circle/blob if possible, or just keep it clean */}
      <View style={styles.decoration} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
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
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
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
    fontSize: 44,
    fontWeight: '700',
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
  },
  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
  },
  decoration: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    zIndex: -1,
  },
});
