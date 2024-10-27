import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Gadgets from "./components/Gadgets/Gadgets";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Gadgets />
      </main>
    </Fragment>
  );
}

export default App;
