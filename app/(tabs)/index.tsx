import React from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { StatCard } from '@/components/dashboard/StatCard';
import { CashflowChart } from '@/components/dashboard/CashflowChart';
import { TransactionItem } from '@/components/dashboard/TransactionItem';
import { SpendingProgress } from '@/components/dashboard/SpendingProgress';
import { InsightCard } from '@/components/dashboard/InsightCard';

export default function DashboardScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Sidebar />
      <View style={styles.main}>
        <Header />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          {/* Financial Snapshot */}
          <View style={styles.snapshotGrid}>
            <StatCard title="Income" value="₦850,000" trend="12%" trendType="up" />
            <StatCard title="Spending" value="₦420,000" trend="5%" trendType="down" />
            <StatCard title="Net Flow" value="₦430,000" trend="Stable" trendType="stable" />
            <StatCard title="Estimated Tax" value="₦210,000" trend="Q3 2024" trendType="period" />
          </View>

          <View style={[styles.layoutGrid, isWeb && styles.layoutGridWeb]}>
            {/* Left Column */}
            <View style={isWeb ? styles.leftColumn : styles.fullWidth}>
              <CashflowChart />

              {/* Recent Transactions */}
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.cardHeader}>
                  <ThemedText style={styles.cardTitle}>Recent Transactions</ThemedText>
                </View>
                <View>
                  <TransactionItem
                    title="Bank Transfer"
                    time="Today, 2:45 PM"
                    amount="-₦25,000"
                    type="expense"
                    icon="arrow.downward"
                  />
                  <TransactionItem
                    title="Spar Supermarket"
                    time="Yesterday, 11:20 AM"
                    amount="-₦12,400"
                    type="expense"
                    icon="shopping.bag"
                  />
                  <TransactionItem
                    title="Salary Payment"
                    time="Oct 28, 2024"
                    amount="+₦450,000"
                    type="income"
                    icon="payments"
                  />
                </View>
                <TouchableOpacity style={styles.viewAllButton}>
                  <ThemedText style={[styles.viewAllText, { color: colors.primary }]}>
                    View all transactions
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>

            {/* Right Column */}
            <View style={isWeb ? styles.rightColumn : styles.fullWidth}>
              {/* Spending Breakdown */}
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, padding: 24 }]}>
                <ThemedText style={[styles.cardTitle, { marginBottom: 24 }]}>Spending Breakdown</ThemedText>
                <SpendingProgress label="Food & Dining" value="₦145,000" percentage={45} color={colors.primary} />
                <SpendingProgress label="Transport" value="₦82,000" percentage={28} color={colors.info} />
                <SpendingProgress label="Subscriptions" value="₦35,000" percentage={15} color={colors.secondary} />
              </View>

              {/* Smart Insights */}
              <View style={styles.insightsSection}>
                <ThemedText style={styles.sectionHeader}>SMART INSIGHTS</ThemedText>
                <InsightCard
                  title="Potential Savings"
                  description="We identified 3 duplicate subscriptions. You could save ₦80,000 monthly by optimizing your plans."
                  icon="lightbulb"
                  type="primary"
                />
                <InsightCard
                  title="Tax Efficiency"
                  description="Your deductible business expenses are trending higher this month. Track them for better returns."
                  icon="verified"
                  type="success"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    height: '100%',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 24,
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    gap: 24,
  },
  snapshotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    width: '100%',
  },
  layoutGrid: {
    flexDirection: 'column',
    gap: 24,
  },
  layoutGridWeb: {
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 2,
    gap: 24,
  },
  rightColumn: {
    flex: 1,
    gap: 24,
  },
  fullWidth: {
    width: '100%',
    gap: 24,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardHeader: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(17, 115, 212, 0.05)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewAllButton: {
    padding: 16,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  insightsSection: {
    gap: 4,
  },
});
