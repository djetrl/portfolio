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
      <div className="container">
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000} unmountOnExit>
              <Routes location={location}>
                <Route path='/aboutme' Component={AboutMe} />
                <Route path='/skills/*' Component={Skills} />
                <Route path='/portfolio' Component={Portfolio}/>
                <Route path='/contact' Component={Contact}/>
                <Route path='/*' Component={WelcomePage} />;
              </Routes>
            </CSSTransition>
          </TransitionGroup>
      </div>
      <StatusPage />
    </div>
  )
}

export default App;
