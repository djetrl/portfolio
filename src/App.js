import { Nav } from './component';
import { StatusPage, Skills, Portfolio, Contact } from './container';
import { WelcomePage, AboutMe } from './component';
import { Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />


      <WelcomePage/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>


    </div>
  )
}

export default App;
