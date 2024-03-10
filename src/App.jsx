import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Series from './pages/series'
import Movie from './pages/movie'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/series' element={<Series></Series>}></Route>
        <Route path='/movie' element={<Movie></Movie>}></Route>
      </Routes>
    </>
  )
}

export default App
