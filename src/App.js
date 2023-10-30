import './stylesheets/App.css';
import './stylesheets/Global.css';
import './stylesheets/Header.css';
import './stylesheets/Showcase.css';
import './stylesheets/Companies.css';
import './stylesheets/Features.css';
import './stylesheets/About.css';
import './stylesheets/Services.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Companies from './components/Companies';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <div className='wrapper'>

      <Header />

      <Showcase />

      <Companies />

      <Features />

      <About />

      <Services />
      
    </div>
  );
}

export default App;
