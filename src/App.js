import React from 'react';
import {WOW} from 'wowjs';
import { Nav } from './component';
import { StatusPage, Skills, Portfolio, Contact } from './container';
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
        <AboutMe/>
        <Skills/>
        <Portfolio/> 
        <Contact/>
  
    </div>
		)
	}
}

export default App;
