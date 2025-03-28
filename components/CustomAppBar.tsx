import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface CustomAppBarProps {
  title: string;
}

export function CustomAppBar({ title }: CustomAppBarProps) {
  const theme = useTheme();

  return (
    <Appbar.Header style={[styles.appBar, { backgroundColor: theme.colors.secondary }]}>
      <Appbar.Content
        title={title}
        titleStyle={styles.titleStyle}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 42,
  },
  titleStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
  },
});