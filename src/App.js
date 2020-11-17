import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import NavState from './context/nav/NavState';
import ProjectState from './context/projects/ProjectState';

const App = () => {
  return (

    <ProjectState>
      <NavState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              {/* <Spinner /> */}
              {/* <h1>Portfolio</h1> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
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
