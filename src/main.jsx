import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserSuggestionsProvider } from './Context/UserSuggestionsProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserSuggestionsProvider>
      <App />
    </UserSuggestionsProvider>
  </React.StrictMode>,
)
