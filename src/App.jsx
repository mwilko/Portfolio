import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Collaboration from './components/Abilities';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <>    
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header />
      <Hero />
      <Projects />
      <Collaboration />
      <Services />
      <Roadmap />
      <Footer />
    </div>

    <ButtonGradient />
    </>
  )
}

export default App
