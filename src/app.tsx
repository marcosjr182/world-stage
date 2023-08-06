import Router, { Route } from "preact-router";
import { Fragment } from "preact/jsx-runtime";

import { HomePage } from "./pages/home-page";
import { Navbar } from "./components/common/navbar";

export function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </Fragment>
  );
}
