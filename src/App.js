import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import MainNav from './components/MainNav';
import Trending from './Pages/Trending/Trending.jsx'
import Series from './Pages/Series/Series.jsx'
import Movies from './Pages/Movies/Movies.jsx'
import Search from './Pages/Search/Search'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Container>
    </div>
    <MainNav/>
    </BrowserRouter>
    </>
  );
}

export default App;
