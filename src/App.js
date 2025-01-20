import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Plans from './pages/Plans/Plans';
import Movies from './pages/Movies/Movies'
import SingleMovie from './pages/SingleMovie/SingleMovie';
import Wishlist from './pages/Wishlist/Wishlist'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
    <BrowserRouter basename="/movie-website">
     <Header />
     <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/plans' element={<Plans />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:id' element={<SingleMovie />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;