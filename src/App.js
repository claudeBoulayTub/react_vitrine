import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './View/Contact';
import Navbar from './Component/Navbar';
import About from './View/About';
function Home({ sites, team, currentIndex, prevMember, nextMember }) {
  return (
    <main className="home-container">
    <section className="welcome-section">
      <h2>Bienvenue chez CotexSystem</h2>
      <p>
        CotexSystem regroupe plusieurs entreprises spécialisées dans la fabrication de solutions industrielles.
      </p>
    </section>

    <section className="sites-section">
      <h2>Nos sites web</h2>
      <div className="sites-grid">
        {sites.map((site, index) => (
          <div className="site-card" key={index}>
            <div className="site-image">
              <img src={site.image} alt={site.name} />
            </div>
            <div className="site-content">
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="btn-link">
                Visiter le site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="team-section">
      <h2>Notre équipe</h2>

      <div className="team-carousel">
        <button onClick={prevMember} className="carousel-btn" aria-label="Membre précédent">‹</button>
        <div className="team-member-card">
          <img
            src={team[currentIndex].photo}
            alt={`${team[currentIndex].firstname} ${team[currentIndex].lastname}`}
            className="team-photo"
          />
          <h3>{team[currentIndex].firstname} {team[currentIndex].lastname}</h3>
          <p>{team[currentIndex].position}</p>
        </div>
        <button onClick={nextMember} className="carousel-btn" aria-label="Membre suivant">›</button>
      </div>
    </section>
  </main>
  );
}

function App() {
  const sites = [
    {
      name: 'Tubconcept',
      description: 'Spécialisée dans les tubes et structures modulaires.',
      url: 'https://www.tubconcept.com',
      image: '/images/tubconcepts.jpg',
    },
    {
      name: 'Comptoir ProRomorantin',
      description: 'Votre partenaire pour le comptoir professionnel à Romorantin.',
      url: '#',
      image: '/images/comptoir-proromorantin.jpg',
    },
    {
      name: 'Cotex System agencement',
      description: "Solutions d'agencement industriel et commercial.",
      url: '#',
      image: '/images/cotex-system-agencement.jpg',
    },
    {
      name: '123Brico',
      description: "Boutique en ligne pour vos besoins de bricolage.",
      url: '#',
      image: '/images/123brico.jpg',
    },
    {
      name: '123Tampon',
      description: 'Expert en tampons personnalisés et fournitures de bureau.',
      url: '#',
      image: '/images/123tampon.jpg',
    },
    {
      name: 'Tubconcept',
      description: 'Solutions innovantes pour tubes et structures.',
      url: '#',
      image: '/images/tubconcept.jpg',
    },
    {
      name: 'Raccord Plus',
      description: 'Fourniture de raccords industriels de haute qualité.',
      url: '#',
      image: '/images/raccord-plus.jpg',
    },
  ];
  const team = [
    {
      firstname: 'Adriano',
      lastname: 'DeSousa',
      position: 'Directeur général',
      photo: '/images/team/alice.jpg',
    },
    {
      firstname: 'Dany',
      lastname: 'DeSousa',
      position: '',
      photo: '/images/team/marc.jpg',
    },
    {
      firstname: 'Claude',
      lastname: 'Boulay',
      position: 'Lead Developpeur',
      photo: '/images/team/sophie.jpg',
    },
    {
      firstname: 'Vivien',
      lastname: 'Mestrot',
      position: '',
      photo: '/images/team/julien.jpg',
    },
    {
      firstname: 'Morane',
      lastname: 'Poma',
      position: 'Assistante commerciale',
      photo: '/images/team/claire.jpg',
    },
  ];
  // State pour le carousel équipe
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? team.length - 1 : prevIndex - 1));
  };

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex === team.length - 1 ? 0 : prevIndex + 1));
  };
  return (
      <Router>
        <div className="App" style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>
          <header className="App-header">
            <h1 style={{ margin: 0 }}>CotexSystem</h1>
            <Navbar />
          </header>
  
          <Routes>
            <Route
              path="/react-vitrine/"
              element={
                <Home
                  sites={sites}
                  team={team}
                  currentIndex={currentIndex}
                  prevMember={prevMember}
                  nextMember={nextMember}
                />
              }
            />
            <Route path="/react-vitrine/contact" element={<Contact />} />
            <Route path="/react-vitrine/a-propos" element={<About />} />
          </Routes>
  
          
        </div>
        <footer style={{ backgroundColor: '#fcb81e', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} CotexSystem</p>
              <div>
                <a href="/react-vitrine/a-propos" style={{ marginRight: '1rem', color: '#000', textDecoration: 'underline' }}>
                  À propos
                </a>
                <a href="/react-vitrine/contact" style={{ color: '#000', textDecoration: 'underline' }}>
                  Contact
                </a>
              </div>
            </div>
          </footer>
      </Router>
  );
}

export default App;
