import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ThemeContextWrapper from "./components/Context/ThemeContextWrapper";


ReactDOM.render(
  <ThemeContextWrapper>
  <React.StrictMode>
    <App />
  </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.getElementById('root')
)

