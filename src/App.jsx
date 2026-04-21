
import { Routes, Route } from 'react-router-dom';
import { Home, LoginPage, SignUpPage } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/hotel" element={<Hotel />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
