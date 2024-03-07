import Nav from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Invest from './components/Invest';

function App() {

  return (
    <>
      <div className='border-8 border-secondary'>
        <Nav />
        <Home />
        <About />
        <Invest />
      </div>
    </>
  )
}

export default App
