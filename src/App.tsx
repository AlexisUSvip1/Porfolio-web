import './index.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Languages from './components/Lenguajes';
import RightSideNav from './components/RightSideNav';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="container">
      <RightSideNav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Languages />
      <Contact />
      <footer>
        <p>© 2025 Alexis Ultreras Sotelo</p>
      </footer>
    </div>
  );
}
