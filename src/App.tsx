import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Work from './components/Work';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
      </main>
    </>

  )
}
