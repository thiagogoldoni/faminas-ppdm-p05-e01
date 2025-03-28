import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ItemController } from './controllers/ItemController';
import { StyleSheet } from 'react-native';
import { CustomAppBar } from './components/CustomAppBar';

export default function App() {

  
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={styles.safeArea}>
          <CustomAppBar title="Gerenciador de Itens" />
          <ItemController />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});