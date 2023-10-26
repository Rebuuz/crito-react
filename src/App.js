import './stylesheets/App.css';
import './stylesheets/Global.css';
import './stylesheets/Header.css';
import './stylesheets/Showcase.css';
import './stylesheets/Companies.css';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Companies from './components/Companies';


function App() {
  return (
    <div className='wrapper'>

      <Header />

      <Showcase />

      <Companies />
      
    </div>
  );
}

export default App;
