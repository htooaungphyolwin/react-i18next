import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {t('welcome')}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {t('description')}
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">
            {t('currentLanguage')}: <span className='text-gray-800 font-bold'>{t('languageName')}</span>
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default App;