
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-slate-600" />
      <div className="flex border border-slate-300 rounded-lg overflow-hidden">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-none border-0 ${
            language === 'en' 
              ? 'bg-slate-800 text-white' 
              : 'bg-transparent text-slate-600 hover:bg-slate-100'
          }`}
        >
          EN
        </Button>
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 text-sm font-medium rounded-none border-0 ${
            language === 'fr' 
              ? 'bg-slate-800 text-white' 
              : 'bg-transparent text-slate-600 hover:bg-slate-100'
          }`}
        >
          FR
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
