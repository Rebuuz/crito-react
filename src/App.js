import './stylesheets/App.css';
import './stylesheets/General.css';
// import './stylesheets/Header.css';
// import './stylesheets/Showcase.css';
// import './stylesheets/Companies.css';
// import './stylesheets/Features.css';
// import '../src/components/About/About.css';
// import './stylesheets/Services.css';

import Header from '../src/components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Companies from '../src/components/Clients/Companies';
import Features from '../src/components/Features/Features';
import About from '../src/components/About/About';
import Services from '../src/components/Services/Services';


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
