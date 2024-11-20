import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import TodoStore from './store/taskstore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={TodoStore}>
    <App />
    </Provider>
  </StrictMode>,
)