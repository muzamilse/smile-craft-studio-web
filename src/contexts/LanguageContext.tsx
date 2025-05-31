
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation object
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Clinical Services',
    'nav.about': 'About Dr. Gamani',
    'nav.gallery': 'Clinical Cases',
    'nav.testimonials': 'Patient Reviews',
    'nav.consultation': 'Clinical Consultation',
    'nav.emergency': 'Emergency Consultation',
    
    // Services dropdown
    'services.implants': 'Osseointegrated Implants',
    'services.veneers': 'Porcelain Laminate Veneers',
    'services.whitening': 'Professional Bleaching',
    'services.makeover': 'Full Mouth Rehabilitation',
    
    // Hero section
    'hero.title.advanced': 'Advanced',
    'hero.title.oral': 'Oral Surgery',
    'hero.title.aesthetic': '& Aesthetic Dentistry',
    'hero.subtitle': 'Experience precision dental implantology and cosmetic restoration with state-of-the-art technology. Our specialist focus ensures optimal oral health outcomes and beautiful, natural-looking results.',
    'hero.cta.schedule': 'Schedule Clinical Consultation',
    'hero.cta.emergency': 'Emergency Consultation',
    'hero.badge.certified': 'Board Certified',
    'hero.badge.experience': '15+ Years Experience',
    'hero.badge.procedures': '2000+ Procedures',
    'hero.badge.sterile': 'Sterile Protocol',
    'hero.badge.safety': 'Hospital-grade safety standards',
    
    // Services section
    'services.title': 'Specialized',
    'services.title.clinical': 'Clinical Services',
    'services.subtitle': 'Our practice specializes in advanced oral surgery, implantology, and aesthetic restorative procedures using cutting-edge dental technology.',
    'services.implants.desc': 'Titanium implant placement with guided surgery for optimal osseointegration and long-term stability.',
    'services.veneers.desc': 'Ultra-thin ceramic restorations for aesthetic enhancement with minimal tooth preparation.',
    'services.whitening.desc': 'Clinical-grade carbamide peroxide treatment for safe, effective tooth whitening.',
    'services.makeover.desc': 'Comprehensive prosthodontic reconstruction combining multiple treatment modalities.',
    'services.view.details': 'View Procedure Details',
    
    // Excellence section
    'excellence.title': 'Clinical',
    'excellence.title.standards': 'Excellence Standards',
    'excellence.subtitle': 'Our practice maintains the highest standards of clinical care with advanced sterilization protocols and state-of-the-art equipment.',
    'excellence.sterilization': 'Sterilization Protocol',
    'excellence.sterilization.desc': 'Hospital-grade autoclave sterilization and single-use instruments ensure complete infection control compliance.',
    'excellence.technology': 'Advanced Technology',
    'excellence.technology.desc': '3D CBCT imaging, digital impressions, and computer-guided surgery for precise treatment planning.',
    'excellence.certification': 'Board Certification',
    'excellence.certification.desc': 'Specialized training in oral surgery and prosthodontics with continuous medical education requirements.',
    
    // CTA section
    'cta.title': 'Schedule Your',
    'cta.title.assessment': 'Clinical Assessment',
    'cta.subtitle': 'Begin your treatment journey with a comprehensive oral examination and personalized treatment planning session.',
    'cta.book': 'Book Clinical Consultation',
    'cta.emergency': 'Emergency Line'
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services Cliniques',
    'nav.about': 'À propos du Dr. Gamani',
    'nav.gallery': 'Cas Cliniques',
    'nav.testimonials': 'Avis Patients',
    'nav.consultation': 'Consultation Clinique',
    'nav.emergency': 'Consultation d\'Urgence',
    
    // Services dropdown
    'services.implants': 'Implants Ostéo-intégrés',
    'services.veneers': 'Facettes en Porcelaine',
    'services.whitening': 'Blanchiment Professionnel',
    'services.makeover': 'Réhabilitation Complète',
    
    // Hero section
    'hero.title.advanced': 'Chirurgie Orale',
    'hero.title.oral': 'Avancée',
    'hero.title.aesthetic': '& Dentisterie Esthétique',
    'hero.subtitle': 'Découvrez l\'implantologie dentaire de précision et la restauration esthétique avec une technologie de pointe. Notre spécialisation garantit des résultats optimaux de santé bucco-dentaire et des résultats beaux et naturels.',
    'hero.cta.schedule': 'Planifier une Consultation Clinique',
    'hero.cta.emergency': 'Consultation d\'Urgence',
    'hero.badge.certified': 'Certifié',
    'hero.badge.experience': '15+ Ans d\'Expérience',
    'hero.badge.procedures': '2000+ Procédures',
    'hero.badge.sterile': 'Protocole Stérile',
    'hero.badge.safety': 'Standards de sécurité hospitaliers',
    
    // Services section
    'services.title': 'Services Cliniques',
    'services.title.clinical': 'Spécialisés',
    'services.subtitle': 'Notre pratique se spécialise dans la chirurgie orale avancée, l\'implantologie et les procédures de restauration esthétique utilisant une technologie dentaire de pointe.',
    'services.implants.desc': 'Placement d\'implants en titane avec chirurgie guidée pour une ostéo-intégration optimale et une stabilité à long terme.',
    'services.veneers.desc': 'Restaurations céramiques ultra-fines pour l\'amélioration esthétique avec une préparation dentaire minimale.',
    'services.whitening.desc': 'Traitement au peroxyde de carbamide de qualité clinique pour un blanchiment dentaire sûr et efficace.',
    'services.makeover.desc': 'Reconstruction prosthodontique complète combinant plusieurs modalités de traitement.',
    'services.view.details': 'Voir les Détails de la Procédure',
    
    // Excellence section
    'excellence.title': 'Standards d\'Excellence',
    'excellence.title.standards': 'Clinique',
    'excellence.subtitle': 'Notre pratique maintient les plus hauts standards de soins cliniques avec des protocoles de stérilisation avancés et des équipements de pointe.',
    'excellence.sterilization': 'Protocole de Stérilisation',
    'excellence.sterilization.desc': 'Stérilisation à l\'autoclave de qualité hospitalière et instruments à usage unique assurent une conformité complète du contrôle des infections.',
    'excellence.technology': 'Technologie Avancée',
    'excellence.technology.desc': 'Imagerie CBCT 3D, empreintes numériques et chirurgie guidée par ordinateur pour une planification de traitement précise.',
    'excellence.certification': 'Certification du Conseil',
    'excellence.certification.desc': 'Formation spécialisée en chirurgie orale et prosthodontie avec des exigences de formation médicale continue.',
    
    // CTA section
    'cta.title': 'Planifiez Votre',
    'cta.title.assessment': 'Évaluation Clinique',
    'cta.subtitle': 'Commencez votre parcours de traitement avec un examen oral complet et une session de planification de traitement personnalisée.',
    'cta.book': 'Réserver une Consultation Clinique',
    'cta.emergency': 'Ligne d\'Urgence'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
