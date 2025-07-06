import styles from './App.module.css';
import  NavBar  from './components/NavBar.jsx'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className={styles.App}>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;
