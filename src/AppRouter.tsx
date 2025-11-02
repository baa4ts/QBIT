import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'

const AppRouter = () => {
  return (
    // Notas para usar el memo de react
    // https://react.dev/learn/react-compiler/introduction
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
