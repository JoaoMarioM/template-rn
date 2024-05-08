import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {Routes} from '@routes/index';
import {theme} from '@theme/index';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.primary,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
