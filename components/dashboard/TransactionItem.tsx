import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface TransactionItemProps {
  title: string;
  time: string;
  amount: string;
  type: 'income' | 'expense' | 'other';
  icon: string;
  isBusiness?: boolean;
}

export function TransactionItem({ title, time, amount, type, icon, isBusiness = false }: TransactionItemProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const getIconColor = () => {
    if (type === 'income') return colors.success;
    if (type === 'expense') return colors.danger;
    return colors.primary;
  };

  const getIconBg = () => {
    const color = getIconColor();
    return `${color}0D`; // 5% opacity hex
  };

  return (
    <TouchableOpacity style={[styles.container, { borderBottomColor: colors.border }]}>
      <View style={styles.left}>
        <View style={[styles.iconContainer, { backgroundColor: getIconBg() }]}>
          <IconSymbol name={icon as any} size={20} color={getIconColor()} />
        </View>
        <View>
          <View style={styles.titleRow}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            {isBusiness && (
              <View style={[styles.badge, { backgroundColor: `${colors.primary}0D` }]}>
                <ThemedText style={[styles.badgeText, { color: colors.primary }]}>Business</ThemedText>
              </View>
            )}
          </View>
          <ThemedText style={styles.time}>{time}</ThemedText>
        </View>
      </View>
      <ThemedText style={[styles.amount, { color: type === 'income' ? colors.success : colors.text }]}>
        {amount}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  time: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: '800',
  },
});
