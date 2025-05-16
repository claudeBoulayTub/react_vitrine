import React from 'react';

function Contact() {
  return (
    <main>
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#fcb81e', textAlign: 'center' }}>Contactez-nous</h2>
      <p style={{ textAlign: 'center' }}>
        Vous pouvez nous contacter via les informations ci-dessous.
      </p>
{/* 
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <input type="text" placeholder="Votre nom" required style={inputStyle} />
        <input type="email" placeholder="Votre email" required style={inputStyle} />
        <textarea placeholder="Votre message" rows="5" required style={inputStyle}></textarea>
        <button type="submit" style={buttonStyle}>Envoyer</button>
      </form> */}

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>Email : contact@cotexsystem.fr</p>
        <p>Téléphone : 02 54 76 70 15</p>
        <p>Adresse : 59b Av. de Paris, 41200 Romorantin-Lanthenay</p>
      </div>
    </div></main>
  );
}

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  backgroundColor: '#fcb81e',
  border: 'none',
  color: '#000',
  cursor: 'pointer',
  borderRadius: '4px'
};

export default Contact;
