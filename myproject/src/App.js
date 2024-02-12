import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {

  return (
    <Router>
      <Navbar />

      <Switch>

        <Container customClass="min-height">

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/company">
            <Company/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/newproject">
            <NewProject/>
          </Route>
          
        </Container>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
