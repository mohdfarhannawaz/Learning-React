import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
// by defualt we can't add two more element in the 'render' method therefore we simple bundle
// the components in the div tag or an empty i.e., <> ...all components </>
