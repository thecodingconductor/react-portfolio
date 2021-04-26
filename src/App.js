// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import NavState from './context/nav/NavState';
import ProjectState from './context/projects/ProjectState';
import ConcertBuilder from './components/projects/ConcertBuilder'
import MarsRover from './components/projects/MarsRover'
import OrchesNation from './components/projects/OrchesNation'


const App = () => {
  return (

    <ProjectState>
      <NavState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container main-application-container">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/projects" component={Projects} /> */}
                <Route exact path="/projects/concertbuilder" component={ConcertBuilder} />
                <Route exact path="/projects/orchesnation" component={OrchesNation} />
                <Route exact path="/projects/marsrover" component={MarsRover} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </NavState>
    </ProjectState>


  );
}

export default App;
