import React from 'react';
import { StyleSheet, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function Sidebar() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  if (!isWeb) return null;

  return (
    <View style={[styles.container, { borderRightColor: colors.border, backgroundColor: colors.card }]}>
      <View style={styles.header}>
        <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
          <IconSymbol name="payments" size={24} color="#fff" />
        </View>
        <ThemedText style={[styles.logoText, { color: colors.primary }]}>SiFi</ThemedText>
      </View>

      <View style={styles.nav}>
        <NavItem icon="dashboard" label="Dashboard" active />
        <NavItem icon="account.balance" label="Accounts" />
        <NavItem icon="receipt" label="Transactions" />
        <NavItem icon="bar.chart" label="Reports" />
        <NavItem icon="settings" label="Settings" />
      </View>
    </View>
  );
}

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.navItem,
        active && { backgroundColor: `${colors.primary}1A` },
      ]}
    >
      <IconSymbol
        name={icon as any}
        size={20}
        color={active ? colors.primary : colors.icon}
      />
      <ThemedText
        style={[
          styles.navText,
          { color: active ? colors.primary : colors.icon },
        ]}
      >
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: '100%',
    padding: 24,
    borderRightWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 48,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  nav: {
    gap: 8,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 8,
  },
  navText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
