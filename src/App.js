import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
