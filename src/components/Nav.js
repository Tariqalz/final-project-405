import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'; 
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">MoveIt</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">{t('dashboard')}</Link>
        </li>
        <li>
          <Link to="/workout">{t('workouts')}</Link>
        </li>
        <li>
          <Link to="/nutrition">{t('nutrition')}</Link>
        </li>
        <li>
          <Link to="/measurements">{t('measurements')}</Link>
        </li>
        <li>
          <Link to="/login">{t('login')}</Link>
        </li>
        <li>
          <button onClick={toggleLanguage} aria-label="Toggle Language" className="language-toggle">
            🌍
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
