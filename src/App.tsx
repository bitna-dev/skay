import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import Test from '@pages/Test'
import Layout from '@components/shared/Layout'
import Hotel from '@pages/Hotel'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/hotel/:id" Component={Hotel} />
          <Route path="/test" Component={Test} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
