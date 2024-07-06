import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';

function HomePage() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1>My Website</h1>
      </header>
      <main style={styles.main}>
        <h2>Welcome to My Website</h2>
        <p>This is the home page. Here is some introductory content about the website.</p>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  footer: {
    background: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default HomePage;
