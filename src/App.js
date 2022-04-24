import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Event from './MainPages/Event';
import Blog from './MainPages/Blog';
import Gallery from './MainPages/Gallery';
import Home from './MainPages/Home';
import MainAbout from './MainPages/MainAbout';
import Login from './MainPages/Login';


import OurMission from './AboutUs/OurMission';
import OurVision from './AboutUs/OurVision';
import CoreValue from './AboutUs/CoreValue';
import Bio from './AboutUs/Bio';

import Contact from './ContactUs/Contact';
import Partners from './ContactUs/Partners';
import Sponsorships from './ContactUs/Sponsorships';
import Support from './ContactUs/Support';

import CYCLOPLOGGING from './Cards/CYCLOPLOGGING';
import CYCLOENDURO from './Cards/CYCLOENDURO';
import CYCLOFIRECHAT from './Cards/CYCLOFIRECHAT';
import CYCLOTOURING from './Cards/CYCLOTOURING';
import Register from './MainPages/Register';
import ErrorPage from './MainPages/ErrorPage';
import Gallery1 from './DemoGallery/Gallery1';
import Gallery2 from './DemoGallery/Gallery2';
import Gallery3 from './DemoGallery/Gallery3';
import Gallery4 from './DemoGallery/Gallery4';

import OngoingEvent from './Event/OngoingEvent';
import PreviousEvent from './Event/PreviousEvent';
import UpcomingEvent from './Event/UpcomingEvent';
import Event1 from './Event/Event1';
import WeeklyBoard from './Event/WeeklyBoard';
import Profile from './MainPages/Profile';
import ProfileEdit from './MainPages/ProfileEdit';
import ForgotPage from './Components/ForgotPage';
import ConnectStrava from './Components/ConnectStrava';
import ConnectStravaS from './Components/ConnectStravaS';
import Navbar from './Components/Navbar';
import Event2 from './Event/Event2';
import Event3 from './Event/Event3';
// import Protectedroute from './MainPages/ProtectedRoute';


function App() {

  // Check If User is Logged In
  const [auth, setAuth] = useState(false);

  const isLoggedIn = async () => {
    if (localStorage.getItem('token') == null) {
      setAuth(false)
    }
    else {
      setAuth(true)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar auth={auth} />
            <Home />
          </Route>
          <Route exact path="/event">
            <Navbar auth={auth} />
            <Event />
          </Route>
          <Route exact path="/blog">
            <Navbar auth={auth} />
            <Blog />
          </Route>
          <Route exact path="/mainabout">
            <Navbar auth={auth} />
            <MainAbout />
          </Route>
          <Route exact path="/gallery">
            <Navbar auth={auth} />
            <Gallery />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgot">
            <ForgotPage />
          </Route>
          <Route exact path="/strava">
            <Navbar auth={auth} />
            <ConnectStrava />
          </Route>
          <Route exact path="/profile">
            <Navbar auth={auth} />
            <Profile />
            <ConnectStrava />
          </Route>
          <Route exact path="/profileEdit">
            <Navbar auth={auth} />
            <ProfileEdit />
            <ConnectStrava />
          </Route>
          <Route exact path="/profileStrava">
            <Navbar auth={auth} />
            <Profile />
            <ConnectStravaS />
          </Route>

          {/* <Protectedroute exact path="/login" component={Login} auth={auth} />
          <Protectedroute exact path="/register" component={Register} auth={auth} />
          <Protectedroute exact path="/profile" component={Profile} auth={auth} />
          <Protectedroute exact path="/logout" component={Logout} auth={auth} /> */}


          <Route exact path="/OurMission">
            <Navbar auth={auth} />
            <OurMission />
          </Route>
          <Route exact path="/OurVision">
            <Navbar auth={auth} />
            <OurVision />
          </Route>
          <Route exact path="/CoreValues">
            <Navbar auth={auth} />
            <CoreValue />
          </Route>
          <Route exact path="/Bio">
            <Navbar auth={auth} />
            <Bio />
          </Route>

          <Route exact path="/Contact">
            <Navbar auth={auth} />
            <Contact />
          </Route>
          <Route exact path="/Partners">
            <Navbar auth={auth} />
            <Partners />
          </Route>
          <Route exact path="/Sponsorships">
            <Navbar auth={auth} />
            <Sponsorships />
          </Route>
          <Route exact path="/Support">
            <Navbar auth={auth} />
            <Support />
          </Route>



          <Route exact path="/Cycloplogging">
            <Navbar auth={auth} />
            <CYCLOPLOGGING />
          </Route>
          <Route exact path="/Cycloenduro">
            <Navbar auth={auth} />
            <CYCLOENDURO />
          </Route>
          <Route exact path="/Cyclofirechat">
            <Navbar auth={auth} />
            <CYCLOFIRECHAT />
          </Route>
          <Route exact path="/Cyclotouring">
            <Navbar auth={auth} />
            <CYCLOTOURING />
          </Route>

          {/* Gallery  */}

          <Route exact path="/gallery1">
            <Gallery1 />
          </Route>
          <Route exact path="/gallery2">
            <Gallery2 />
          </Route>
          <Route exact path="/gallery3">
            <Gallery3 />
          </Route>
          <Route exact path="/gallery4">
            <Gallery4 />
          </Route>

          <Route exact path="/currentevent">
            <OngoingEvent />
          </Route>
          <Route exact path="/previousevent">
            <PreviousEvent />
          </Route>
          <Route exact path="/upcomingevent">
            <UpcomingEvent />
          </Route>
          <Route exact path="/event1">
            <Navbar auth={auth} />
            <Event1 />
          </Route>
          <Route exact path="/event2">
            <Navbar auth={auth} />
            <Event2 />
          </Route>
          <Route exact path="/event3">
            <Navbar auth={auth} />
            <Event3 />
          </Route>

          <Route exact path="/weeklyboard">
            <Navbar auth={auth} />
            <WeeklyBoard />
          </Route>


          {/*  */}

          <Route path="*">
            <ErrorPage />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;

