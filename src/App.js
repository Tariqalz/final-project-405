import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import WorkoutPage from './components/WorkoutPage';
import MacrosPage from './components/MacrosPage';
import MeasurementsPage from './components/MeasurementsPage';
import SignupPage from './components/SignupPage';
import './App.css';
import './i18n';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/final-project-405" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workout" element={<WorkoutPage />} />
            <Route path="/nutrition" element={<MacrosPage />} />
            <Route path="/measurements" element={<MeasurementsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
