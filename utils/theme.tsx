
import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../components/ThemeProvider';

const { isToggled, toggleTheme } = useTheme();

const getThemeColor = () => {
  const theme = isToggled ? "#0D0D26" : "white";
  return theme;
};

export { getThemeColor };

