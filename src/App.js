import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Landing";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Footer from "./components/footer";

import "./styles/App.scss";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
