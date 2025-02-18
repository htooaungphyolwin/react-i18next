import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ko', name: 'Korean' },
    { code: 'my', name: 'Myanmar' },
  ];

  return (
    <div className="flex items-center gap-4">
      <Languages className="w-6 h-6 text-gray-800" />
      <div className="flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-4 py-2 rounded-md transition-colors ${
              i18n.language === lang.code
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;