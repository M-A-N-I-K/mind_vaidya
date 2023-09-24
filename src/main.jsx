import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserSuggestionsProvider } from './Context/UserSuggestionsProvider.jsx'
import { UserDataProvider } from './Context/UserData.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserDataProvider>
    <UserSuggestionsProvider>
      <App />
    </UserSuggestionsProvider>
  </UserDataProvider>
)
