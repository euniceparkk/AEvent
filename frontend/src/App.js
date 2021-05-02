import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import HomePage from './components/HomePage';
import EventPage from "./components/EventPage";
import TicketPage from "./components/TicketPage";
import FavoritePage from "./components/FavoritePage";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/events/search'>
            <SearchPage />
          </Route>
          <Route path='/events/:id'>
            <EventPage />
          </Route>
          <Route path='/profile/tickets'>
            <TicketPage />
          </Route>
          <Route path='/profile/favorites'>
            <FavoritePage />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;