import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import './App.css'
import routes from './config/routes'
import { store } from './redux/store'
 

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map ((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component/>
              }/>
            ))}
          </Routes>
        </Provider>
      </div>

    </BrowserRouter>
  )
}

export default App
