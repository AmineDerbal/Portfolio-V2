import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, Works, About, Contact, Cursor } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Cursor />
        <div>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
