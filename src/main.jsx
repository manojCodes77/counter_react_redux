import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import counterStore from './store/index.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
