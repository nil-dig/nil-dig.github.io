import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
