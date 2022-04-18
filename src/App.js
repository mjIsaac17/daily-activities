import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import Layout from './components/Layout';
// import Login from './pages/Login';
import store, { persistor } from './redux/store';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
