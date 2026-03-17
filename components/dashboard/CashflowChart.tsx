import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function CashflowChart() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.title}>Cashflow Overview</ThemedText>
          <ThemedText style={styles.subtitle}>Income vs Spending (Last 6 months)</ThemedText>
        </View>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: colors.primary }]} />
            <ThemedText style={styles.legendText}>Income</ThemedText>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: colors.secondary }]} />
            <ThemedText style={styles.legendText}>Spending</ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Svg height="240" width="100%" viewBox="0 0 800 240" preserveAspectRatio="none">
          <Defs>
            <LinearGradient id="gradient-income" x1="0" x2="0" y1="0" y2="1">
              <Stop offset="5%" stopColor={colors.primary} stopOpacity="0.1" />
              <Stop offset="95%" stopColor={colors.primary} stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Path
            d="M0,180 C100,160 200,80 300,100 C400,120 500,40 600,60 C700,80 800,20 L800,240 L0,240 Z"
            fill="url(#gradient-income)"
          />
          <Path
            d="M0,180 C100,160 200,80 300,100 C400,120 500,40 600,60 C700,80 800,20"
            fill="none"
            stroke={colors.primary}
            strokeWidth="3"
          />
          <Path
            d="M0,200 C100,190 200,150 300,160 C400,140 500,120 600,110 C700,130 800,90"
            fill="none"
            stroke={colors.secondary}
            strokeDasharray="6,4"
            strokeWidth="2"
          />
        </Svg>
      </View>

      <View style={styles.xAxis}>
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
          <ThemedText key={month} style={styles.xLabel}>
            {month}
          </ThemedText>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  legend: {
    flexDirection: 'row',
    gap: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    fontWeight: '500',
  },
  chartContainer: {
    height: 240,
    width: '100%',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 8,
  },
  xLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
  },
});
