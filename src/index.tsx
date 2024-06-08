import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import globalStyle from '@styles/globalStyle'
import { Global } from '@emotion/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import '@smastrom/react-rating/style.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})
root.render(
  <>
    <Router>
      <Global styles={globalStyle} />
      <QueryClientProvider client={client}>
        <ToastContainer autoClose={1500} />
        <App />
      </QueryClientProvider>
    </Router>
  </>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
