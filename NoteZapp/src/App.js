import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import EventLandingPage from "demos/EventLandingPage.js";

import ComponentRenderer from "ComponentRenderer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "StateProvider";
import LoginUtil from "LoginUtil";
import SearchNotes from "pages/SearchNotes";
export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/pages/SearchNotes">
          <SearchNotes />
        </Route>
        <Route path="/pages/:name">
          <LoginUtil  />
        </Route>
        <Route path="/">
          <EventLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
