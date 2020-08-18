// Defaults
import React from 'react';

// Components
import { View, SafeAreaView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Root from './Root';

// Store/Persistor
import { store, persistor } from './store';

// SafeAreaView supports is to handle iphone 11 edgecase
export default App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <Header
            centerComponent={{ text: 'Density Take Home', style: styles.header }}
            containerStyle={styles.headerContainer}
          />    
          <Root />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    color: 'black',
    fontSize: 25,
  },
  headerContainer: {
    backgroundColor: '#f9f9f9'
  }
});

