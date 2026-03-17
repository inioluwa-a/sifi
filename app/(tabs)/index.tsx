import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { UnifiedStatCard } from '@/components/dashboard/UnifiedStatCard';
import { CashflowChart } from '@/components/dashboard/CashflowChart';
import { TransactionItem } from '@/components/dashboard/TransactionItem';
import { SpendingProgress } from '@/components/dashboard/SpendingProgress';
import { InsightCard } from '@/components/dashboard/InsightCard';
import { TaxProjectionCard } from '@/components/dashboard/TaxProjectionCard';
import { SegmentedControl } from '@/components/dashboard/SegmentedControl';
import { FAB } from '@/components/dashboard/FAB';

export default function DashboardScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  const [timeFilter, setTimeFilter] = useState(0);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Sidebar />
      <View style={styles.main}>
        <Header />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <View style={styles.headerRow}>
            <ThemedText style={styles.screenTitle}>Dashboard</ThemedText>
            <View style={[styles.filterContainer, !isWeb && { width: '100%' }]}>
              <SegmentedControl
                options={['This Month', 'Last Month']}
                selectedIndex={timeFilter}
                onChange={setTimeFilter}
              />
            </View>
          </View>

          {/* Financial Snapshot */}
          <View style={styles.snapshotGrid}>
            <View style={isWeb ? { flex: 3 } : { width: '100%' }}>
              <UnifiedStatCard />
            </View>
            <View style={isWeb ? { flex: 1.2 } : { width: '100%' }}>
              <TaxProjectionCard liability="₦210,000" goal="₦70,000" />
            </View>
          </View>

          <View style={[styles.layoutGrid, isWeb && styles.layoutGridWeb]}>
            {/* Left Column */}
            <View style={isWeb ? styles.leftColumn : styles.fullWidth}>
              <CashflowChart />

              {/* Recent Transactions */}
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.cardHeader}>
                  <ThemedText style={styles.cardTitle}>Recent Transactions</ThemedText>
                  <TouchableOpacity>
                    <ThemedText style={[styles.linkText, { color: colors.primary }]}>See All</ThemedText>
                  </TouchableOpacity>
                </View>
                <View>
                  <TransactionItem
                    title="Bank Transfer"
                    time="Today, 2:45 PM"
                    amount="-₦25,000"
                    type="expense"
                    icon="arrow.downward"
                    isBusiness
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
                    isBusiness
                  />
                </View>
              </View>
            </View>

            {/* Right Column */}
            <View style={isWeb ? styles.rightColumn : styles.fullWidth}>
              {/* Spending Breakdown */}
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, padding: 24 }]}>
                <ThemedText style={[styles.cardTitle, { marginBottom: 24 }]}>Spending Breakdown</ThemedText>
                <SpendingProgress label="Food & Dining" value="₦145,000" percentage={45} color={colors.primary} />
                <SpendingProgress label="Transport" value="₦82,000" percentage={28} color={colors.info} />
                <SpendingProgress label="Subscriptions" value="₦35,000" percentage={15} color={colors.icon} />
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
        {!isWeb && <FAB />}
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
    position: 'relative',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 24,
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    gap: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
  },
  filterContainer: {
    width: 240,
  },
  snapshotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    width: '100%',
  },
  layoutGrid: {
    flexDirection: 'column',
    gap: 32,
  },
  layoutGridWeb: {
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 2,
    gap: 32,
  },
  rightColumn: {
    flex: 1,
    gap: 32,
  },
  fullWidth: {
    width: '100%',
    gap: 32,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '700',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  insightsSection: {
    gap: 4,
  },
});
