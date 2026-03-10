import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const ProblemAwareness = lazy(() => import('./components/ProblemAwareness'));
const Methodology = lazy(() => import('./components/Methodology'));
const Segments = lazy(() => import('./components/Segments'));
const Steps = lazy(() => import('./components/Steps'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-jms-primary">
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ProblemAwareness />
        <Methodology />
        <Segments />
        <Steps />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
