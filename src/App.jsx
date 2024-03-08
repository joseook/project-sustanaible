import Nav from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Invest from './components/Invest';
import VanAndDes from './components/vANDd';
import Contribution from './components/Contribution';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='border-8 border-secondary'>
        <Nav />
        <Home />
        <About />
        <Invest />
        <VanAndDes />
        <Contribution />
        <Footer />
      </div>
    </>
  )
}

export default App