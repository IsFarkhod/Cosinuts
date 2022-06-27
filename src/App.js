import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import AboutUs from './pages/aboutUs/AboutUs';
import AboutShipping from './pages/aboutShipping/AboutShipping';
import Store from './pages/store/Store';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutshipping" element={<AboutShipping />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
