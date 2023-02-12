import React from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from "react-redux"
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import store, { persistor } from "./redux/store"
import Loading from './components/notification/loading'

// persistor.flush().then(() => {
//   return persistor.purge();
// });

render(
  <React.StrictMode>
    <BrowserRouter>                                                                                                                                                                                                                                 <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
