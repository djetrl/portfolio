import React from 'react';
import {WOW} from 'wowjs';
import { Nav } from './component';
import { Element } from 'react-scroll';
import {  Skills, Portfolio, Contact } from './container';
import { WelcomePage, AboutMe } from './component';
class App extends React.Component {
	componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}

	render() {
		return (
      <div className="App">
        <Nav />
        <WelcomePage/>
        <Element name='#aboutme'> 
          <AboutMe/>
        </Element>
        <Element name='#skills'> 
          <Skills/>
        </Element>
        <Element name='#portfolio'> 
          <Portfolio/> 
        </Element>
        <Element name='#contact'> 
          <Contact/>
        </Element>
    </div>
		)
	}
}

export default App;
