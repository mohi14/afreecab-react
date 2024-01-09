import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import { router } from './Routes/routes'

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
