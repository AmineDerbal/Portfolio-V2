import { BrowserRouter } from 'react-router-dom';
import { Navbar, StarsCanvas, Hero, Works, About, Contact } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
        <div>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
