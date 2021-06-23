import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Faculties from './pages/faculties'
import Scholars from './pages/scholars';
import Post from './pages/Post_doc'
import Administration from './pages/admin_staff'
import Programs from './pages/programs'
import Courses from './pages/courses'
import Rfocus from './pages/rfocus'
import Ongoing_projects from './pages/ongoing_projects'
import Publication from './pages/publications'
import Mini from './pages/completed_mini_projects'
// import V_ideo from './components/video'
function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/people/faculties">
            <Faculties/>
          </Route>
          <Route path="/people/scholars">
            <Scholars/>
          </Route>
          <Route path="/people/postdoc">
            <Post/>
          </Route>
          <Route path="/people/administrative_staffs">
            <Administration/>
          </Route>
          <Route path="/academics/courses">
            <Courses/>
          </Route>
          <Route path="/academics/programs">
            <Programs/>
          </Route>
          <Route path="/research/focus_area">
            <Rfocus/>
          </Route>
          <Route path="/research/ongoing_project">
            <Ongoing_projects/>
          </Route>
          <Route path="/research/publication">
            <Publication/>
          </Route>
          <Route path="/research/mini_projects">
            <Mini/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
   
    </Router>
    
  
    // <About/>
    // <Faculties/>
    //  <Scholars/>
    // <Post/>
    // <Administration/>
    // <Programs/>
    // <Courses/>
    // <Rfocus/>
    // <Ongoing_projects/>
    // <Publication/>
    // <Mini/>
    // <V_ideo/>
    );
}

export default App;
