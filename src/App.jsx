import Header from './components/Header';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import Methodology from './components/Methodology';
import Segments from './components/Segments';
import Steps from './components/Steps';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <Hero />
      <ProblemAwareness />
      <Methodology />
      <Segments />
      <Steps />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
