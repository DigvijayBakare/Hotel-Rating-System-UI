
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Hotel from './pages/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import CreateAccount from './components/CreateAccount';

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
