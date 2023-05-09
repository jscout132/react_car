import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import './App.css'
import routes from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
      <Navbar />
        <Routes>
          { routes.map ((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component/>
            }/>
          ))}
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
