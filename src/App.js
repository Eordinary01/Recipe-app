// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Details from './pages/details';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-950 text-lg'>
        <Navbar/>


      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/favorites" element={<Favorites/>}/>
        <Route exact path ="/recipe-item/:id" element={<Details/>}/>

      </Routes>
      </div>
      
    </div>
  );
}

export default App;