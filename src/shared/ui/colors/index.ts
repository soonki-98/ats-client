// colorPalette.ts

export type ColorVariant = keyof typeof colorPalette;

export const colorPalette = {
  black: '#000000', // Black

  primary_10: '#e3f2fd', // Lightest Blue
  primary_20: '#bbdefb', // Light Blue
  primary_30: '#90caf9', // Medium Light Blue
  primary_40: '#64b5f6', // Light Blue
  primary_50: '#42a5f5', // Blue
  primary_60: '#2196f3', // Strong Blue
  primary_70: '#1e88e5', // Darker Blue
  primary_80: '#1976d2', // Darker Blue
  primary_90: '#1565c0', // Very Dark Blue
  primary_100: '#0d47a1', // Dark Blue

  secondary_10: '#f5f5f5', // Light Gray
  secondary_20: '#eeeeee', // Lighter Gray
  secondary_30: '#e0e0e0', // Light Gray
  secondary_40: '#bdbdbd', // Medium Gray
  secondary_50: '#9e9e9e', // Gray
  secondary_60: '#757575', // Dark Gray
  secondary_70: '#616161', // Darker Gray
  secondary_80: '#424242', // Very Dark Gray
  secondary_90: '#212121', // Almost Black Gray
  secondary_100: '#6c757d', // Bootstrap Gray

  success_10: '#d4edda', // Lightest Green
  success_20: '#c3e6cb', // Light Green
  success_30: '#b1dfb3', // Medium Light Green
  success_40: '#8fd9a8', // Light Green
  success_50: '#66c2a5', // Green
  success_60: '#28a745', // Bootstrap Green
  success_70: '#1e7e34', // Darker Green
  success_80: '#1c7430', // Dark Green
  success_90: '#155d27', // Very Dark Green
  success_100: '#0e3a1f', // Dark Green

  danger_10: '#f8d7da', // Lightest Red
  danger_20: '#f5c6cb', // Light Red
  danger_30: '#f1a6a8', // Medium Light Red
  danger_40: '#ec8d8d', // Light Red
  danger_50: '#e74c3c', // Red
  danger_60: '#c62828', // Strong Red
  danger_70: '#b71c1c', // Darker Red
  danger_80: '#a60000', // Dark Red
  danger_90: '#8e0000', // Very Dark Red
  danger_100: '#600000', // Dark Red

  warning_10: '#fff3cd', // Lightest Yellow
  warning_20: '#ffecb5', // Light Yellow
  warning_30: '#ffe5a5', // Medium Light Yellow
  warning_40: '#ffd379', // Light Yellow
  warning_50: '#ffc107', // Bootstrap Yellow
  warning_60: '#e0a800', // Strong Yellow
  warning_70: '#d39e00', // Darker Yellow
  warning_80: '#c69500', // Dark Yellow
  warning_90: '#b16b00', // Very Dark Yellow
  warning_100: '#8c4d00', // Dark Yellow

  info_10: '#e1e9f0', // Lightest Navy
  info_20: '#c4d3e1', // Light Navy
  info_30: '#a6bdd2', // Medium Light Navy
  info_40: '#87a8c2', // Light Navy
  info_50: '#4a6b8c', // Navy
  info_60: '#395273', // Strong Navy
  info_70: '#2e3d5a', // Darker Navy
  info_80: '#1e2b44', // Dark Navy
  info_90: '#141b32', // Very Dark Navy
  info_100: '#0d1a2d', // Darkest Navy

  light_10: '#fefefe', // Lightest Gray
  light_20: '#f9f9f9', // Light Gray
  light_30: '#f3f3f3', // Medium Light Gray
  light_40: '#ececec', // Light Gray
  light_50: '#e9ecef', // Bootstrap Light
  light_60: '#dcdcdc', // Strong Light Gray
  light_70: '#c0c0c0', // Darker Light Gray
  light_80: '#a0a0a0', // Dark Gray
  light_90: '#7f7f7f', // Very Dark Gray
  light_100: '#6c757d', // Dark Gray

  dark_10: '#f0f0f0', // Lightest Dark
  dark_20: '#d6d6d6', // Light Dark
  dark_30: '#bfbfbf', // Medium Light Dark
  dark_40: '#a6a6a6', // Light Dark
  dark_50: '#343a40', // Bootstrap Dark
  dark_60: '#2e3136', // Strong Dark
  dark_70: '#1c1c1c', // Darker Dark
  dark_80: '#121212', // Dark Dark
  dark_90: '#0d0d0d', // Very Dark Dark
  dark_100: '#000000', // Black

  muted_10: '#f8f9fa', // Lightest Muted
  muted_20: '#e9ecef', // Light Muted
  muted_30: '#dee2e6', // Medium Light Muted
  muted_40: '#ced4da', // Light Muted
  muted_50: '#adb5bd', // Muted Gray
  muted_60: '#6c757d', // Strong Muted
  muted_70: '#495057', // Darker Muted
  muted_80: '#343a40', // Dark Muted
  muted_90: '#212529', // Very Dark Muted
  muted_100: '#000000', // Black

  link_10: '#e3f2fd', // Lightest Blue
  link_20: '#bbdefb', // Light Blue
  link_30: '#90caf9', // Medium Light Blue
  link_40: '#64b5f6', // Light Blue
  link_50: '#42a5f5', // Blue
  link_60: '#2196f3', // Strong Blue
  link_70: '#1e88e5', // Darker Blue
  link_80: '#1976d2', // Darker Blue
  link_90: '#1565c0', // Very Dark Blue
  link_100: '#0d47a1', // Dark Blue

  white: '#ffffff', // White

  darkBlue_10: '#e3f2fd', // Lightest Dark Blue
  darkBlue_20: '#bbdefb', // Light Dark Blue
  darkBlue_30: '#90caf9', // Medium Light Dark Blue
  darkBlue_40: '#64b5f6', // Light Dark Blue
  darkBlue_50: '#42a5f5', // Dark Blue
  darkBlue_60: '#2196f3', // Strong Dark Blue
  darkBlue_70: '#1e88e5', // Darker Dark Blue
  darkBlue_80: '#1976d2', // Darker Dark Blue
  darkBlue_90: '#1565c0', // Very Dark Dark Blue
  darkBlue_100: '#0d47a1', // Dark Dark Blue

  neonGreen_10: '#e3f9e5', // Lightest Neon Green
  neonGreen_20: '#c3f8c5', // Light Neon Green
  neonGreen_30: '#a2f7a4', // Medium Light Neon Green
  neonGreen_40: '#7ef481', // Light Neon Green
  neonGreen_50: '#39ff14', // Neon Green
  neonGreen_60: '#32e012', // Strong Neon Green
  neonGreen_70: '#2be10e', // Darker Neon Green
  neonGreen_80: '#22b10a', // Dark Neon Green
  neonGreen_90: '#1a9308', // Very Dark Neon Green
  neonGreen_100: '#157006', // Dark Neon Green

  coral_10: '#ffebeb', // Lightest Coral
  coral_20: '#ffcccc', // Light Coral
  coral_30: '#ffabab', // Medium Light Coral
  coral_40: '#ff8a8a', // Light Coral
  coral_50: '#ff7f50', // Coral
  coral_60: '#f56c5c', // Strong Coral
  coral_70: '#f04b4b', // Darker Coral
  coral_80: '#e52d2d', // Dark Coral
  coral_90: '#d92424', // Very Dark Coral
  coral_100: '#b71c1c', // Dark Coral

  violet_10: '#eae3f3', // Lightest Violet
  violet_20: '#d8bdf1', // Light Violet
  violet_30: '#c69ef0', // Medium Light Violet
  violet_40: '#b47ee8', // Light Violet
  violet_50: '#8a2be2', // Violet
  violet_60: '#7a1ebc', // Strong Violet
  violet_70: '#6a179a', // Darker Violet
  violet_80: '#5a0d76', // Dark Violet
  violet_90: '#490b5d', // Very Dark Violet
  violet_100: '#3d0954', // Dark Violet

  beige_10: '#f8f5f1', // Lightest Beige
  beige_20: '#f0e6e0', // Light Beige
  beige_30: '#e1d1c6', // Medium Light Beige
  beige_40: '#d2bfb0', // Light Beige
  beige_50: '#f5f5dc', // Beige
  beige_60: '#e3e0c4', // Strong Beige
  beige_70: '#d1c8ab', // Darker Beige
  beige_80: '#bfb59b', // Dark Beige
  beige_90: '#a89b83', // Very Dark Beige
  beige_100: '#8f7e6e', // Dark Beige

  olive_10: '#e4e5d3', // Lightest Olive
  olive_20: '#c5c6a6', // Light Olive
  olive_30: '#a6a67a', // Medium Light Olive
  olive_40: '#868f4d', // Light Olive
  olive_50: '#808000', // Olive
  olive_60: '#6e6c00', // Strong Olive
  olive_70: '#5a5800', // Darker Olive
  olive_80: '#464700', // Dark Olive
  olive_90: '#2d2d00', // Very Dark Olive
  olive_100: '#1a1a00', // Dark Olive
} as const;
