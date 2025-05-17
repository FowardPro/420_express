import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import PremiumSection from './components/PremiumSection/PremiumSection';
import TrackingSection from './components/TrackingSection/TrackingSection';
import LoginPage from './components/Login/LoginPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <WelcomeSection />
            <PremiumSection />
            <TrackingSection />
            <Footer/>
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
