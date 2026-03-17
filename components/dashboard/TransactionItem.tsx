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
}

export function TransactionItem({ title, time, amount, type, icon }: TransactionItemProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const getIconColor = () => {
    if (type === 'income') return colors.success;
    if (type === 'expense') return colors.danger;
    return colors.primary;
  };

  const getIconBg = () => {
    const color = getIconColor();
    return `${color}1A`; // 10% opacity hex
  };

  return (
    <TouchableOpacity style={[styles.container, { borderBottomColor: colors.border }]}>
      <View style={styles.left}>
        <View style={[styles.iconContainer, { backgroundColor: getIconBg() }]}>
          <IconSymbol name={icon as any} size={20} color={getIconColor()} />
        </View>
        <View>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedText style={styles.time}>{time}</ThemedText>
        </View>
      </View>
      <ThemedText style={[styles.amount, { color: type === 'income' ? colors.success : colors.danger }]}>
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
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
  },
});
