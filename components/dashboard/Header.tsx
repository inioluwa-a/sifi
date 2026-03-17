import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Header() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  return (
    <View style={[styles.container, { borderBottomColor: colors.border, backgroundColor: colors.card, paddingTop: Math.max(insets.top, 16) }]}>
      <View style={styles.content}>
        {!isWeb && (
          <View style={styles.left}>
            <View style={[styles.logoContainer, { backgroundColor: colors.primary }]}>
              <IconSymbol name="payments" size={24} color="#fff" />
            </View>
            <ThemedText style={[styles.logoText, { color: colors.primary }]}>SiFi</ThemedText>
          </View>
        )}

        <View style={styles.right}>
          {isWeb && (
            <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
              <ThemedText style={styles.buttonText}>Connect Bank</ThemedText>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={[styles.avatarContainer, { borderColor: `${colors.primary}33`, backgroundColor: `${colors.primary}1A` }]}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDygFHzjxeiHPZXeCygqZB-Vr7mhic3YgpbSelhBuJUMfd2LeJ-Gbh1RVxY8LAdA-Ef5XRk52jdtK0JzvYewNV3y96SuGEzSYPTgULUOxKIxoqEGXw7o8q4UVreL1EgYv2irHd1NNnenFNBCrnQqC_CW06moc6mxhpYrOTWWmPO5YIdnH0VC5WG-X8hkqigTjjIsKxjTJi3uxKela_ukXfJ8DUcrcHNTSR7BrIWPdhup7aPPEMF8rHxZHBiUETf5QGgWIIEBpW-T7k' }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    zIndex: 50,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginLeft: 'auto',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
