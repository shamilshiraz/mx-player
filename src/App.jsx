import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Category from './components/Category'
import View from './components/View'




function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<WatchHistory/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/allVideos' element={<View/>}/>

   </Routes>
    <Footer/>
    </>
  )
}

export default App
