import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendType?: 'up' | 'down' | 'stable' | 'period';
}

export function StatCard({ title, value, trend, trendType }: StatCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const getTrendColor = () => {
    if (trendType === 'up') return colors.success;
    if (trendType === 'down') return colors.danger;
    if (trendType === 'stable') return colors.primary;
    return colors.icon;
  };

  const getTrendIcon = () => {
    if (trendType === 'up') return 'trending.up';
    if (trendType === 'down') return 'trending.down';
    return null;
  };

  const trendIcon = getTrendIcon();

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <View style={styles.valueContainer}>
        <ThemedText style={styles.value}>{value}</ThemedText>
        {trend && (
          <View style={styles.trendContainer}>
            {trendIcon && (
              <IconSymbol name={trendIcon as any} size={14} color={getTrendColor()} />
            )}
            <ThemedText style={[styles.trendText, { color: getTrendColor() }]}>
              {trend}
            </ThemedText>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 200,
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
