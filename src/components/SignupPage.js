import React from "react";
import { useTranslation } from "react-i18next";
import "./SignupPage.css";

function SignupPage() {
  const { t } = useTranslation();

  return (
    <div className="signup-page">
      <h1 className="signup-title">{t('createAccountTitle')}</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">{t('username')}:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={t('enterUsername')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('email')}:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('enterEmail')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">{t('password')}:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={t('enterPassword')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">{t('confirmPassword')}:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder={t('confirmPasswordPlaceholder')}
          />
        </div>
        <button type="submit" className="signup-button">
          {t('signUp')}
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
