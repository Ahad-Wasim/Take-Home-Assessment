import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

// load store into asyncstorage for a faster user experience
const persistConfig = {
  key: 'root',
  // provide the natice storage on mobile devices
  storage: AsyncStorage,
  // avoid initializing websocket twice
  blacklist: ['websocketReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  compose(
      applyMiddleware(thunk),
      // This is for React Native Debugger
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

const persistor = persistStore(store);

export { store, persistor }
