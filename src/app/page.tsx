import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNos from './components/SobreNos';
import Servicos from './components/Servicos';
import Cases from './components/Cases';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNos />
        <Servicos />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
