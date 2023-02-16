import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ThemeProvider } from './Components/ContextApi/Context'
const persistor = persistStore(Store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
