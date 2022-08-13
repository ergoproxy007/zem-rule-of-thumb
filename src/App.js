import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { LandingPage } from "pages/Landing";
import { ConditionalRoute } from "components/ConditionalRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <ConditionalRoute 
          path="/"
          redirectTo="/landing"
          canActivate={true}
          component={LandingPage}
        />
      </Switch>
    </Router>
  );
}
