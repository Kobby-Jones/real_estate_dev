// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';
import CustomNavbar from './components/Navbar';
import RentPropertySection from './components/RentPropertiesSection';
import SalesPropertySection from "./components/SalesPropertySection";
import Testimonials from './components/Testiminials';



function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <Testimonials />
      <SalesPropertySection />
      <RentPropertySection />
    </div>
  );
}

export default App;
