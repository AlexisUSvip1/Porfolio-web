import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero' },
  { id: 'skills' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'languages' },
  { id: 'contact' },
];

export default function RightSideNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="right-nav">
      {sections.map(({ id }) => (
        <div
          key={id}
          className={`nav-dot ${active === id ? 'active' : ''}`}
          onClick={() => scrollToSection(id)}
        ></div>
      ))}
    </div>
  );
}
