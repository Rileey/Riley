import './App.css';
import Firstpage from './components/firstpage';
import Navbar from './components/navbar';
import Container from './components/container';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';





function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Container />
        <Firstpage />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
