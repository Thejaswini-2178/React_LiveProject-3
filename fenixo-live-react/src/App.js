import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import  About  from './Components/About';
import Service from './Components/Service';
import Whyus from './Components/Whyus';
import Team from './Components/Team';
import Login from './Components/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Header/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/whyus' element={<Whyus/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
