import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface InsightCardProps {
  title: string;
  description: string;
  icon: string;
  type: 'primary' | 'success';
}

export function InsightCard({ title, description, icon, type }: InsightCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const getColor = () => {
    if (type === 'success') return colors.success;
    return colors.primary;
  };

  const getBgColor = () => {
    const color = getColor();
    return `${color}0D`; // 5% opacity hex
  };

  const getBorderColor = () => {
    const color = getColor();
    return `${color}33`; // 20% opacity hex
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: getBgColor(),
          borderColor: getBorderColor(),
        },
      ]}
    >
      <View style={styles.header}>
        <IconSymbol name={icon as any} size={20} color={getColor()} />
        <ThemedText style={[styles.title, { color: getColor() }]}>{title}</ThemedText>
      </View>
      <ThemedText style={styles.description}>{description}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#64748b',
  },
});
