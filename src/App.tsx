import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/test" Component={Test} />
      </Routes>
    </>
  )
}

export default App
