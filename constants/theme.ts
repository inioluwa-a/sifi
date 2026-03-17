/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#054163'; // Primary Blue
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1A1C1E', // Darker text for readability
    background: '#FFFFFF', // Pure White
    card: '#FFFFFF',
    primary: '#054163', // Primary Blue
    secondary: '#F1F3F4', // Soft Gray
    success: '#059669',
    danger: '#E11D48',
    warning: '#FFBF00', // Amber Accent
    info: '#0EA5E9',
    tint: tintColorLight,
    icon: '#64748B',
    tabIconDefault: '#64748B',
    tabIconSelected: tintColorLight,
    border: 'rgba(5, 65, 99, 0.08)',
    shadow: 'rgba(0, 0, 0, 0.04)',
  },
  dark: {
    text: '#F8FAFC',
    background: '#0F172A',
    card: 'rgba(30, 41, 59, 0.7)',
    primary: '#38BDF8', // Lighter blue for dark mode
    secondary: '#1E293B',
    success: '#10B981',
    danger: '#F43F5E',
    warning: '#FBBF24',
    info: '#38BDF8',
    tint: tintColorDark,
    icon: '#94A3B8',
    tabIconDefault: '#94A3B8',
    tabIconSelected: tintColorDark,
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.2)',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'Manrope',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Manrope',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "Manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
