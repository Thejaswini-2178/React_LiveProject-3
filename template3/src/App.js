import logo from './logo.svg';
import './App.css';
import Header3 from './Template3/Header/Header3'
import About from './Template3/About/About';
import Whysection from './Template3/Whysection/Whysection';
import Team from './Template3/Team/Team';
import Clintsection from './Template3/Clint/Clintsection';
import Info from './Template3/Info/Info';
import Footer from './Template3/Footer/Footer';
import Script from './Template3/Script/Script';
import Service from './Template3/Service/Service';


function App() {
  return (
    <div className="App">
      <Header3/>
      <Service/>
      <About/>
      <Whysection/> 
      <Team/>
      <Clintsection/>
      <Info/>
      <Footer/>
      <Script/>
    </div>
  );
}

export default App;
