//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=QwarZBtFoFA&list=RDCMUC8S4rDRZn6Z_StJ-hh7ph8g&start_radio=1&t=2960s

//App.js is kinda like a template/sketeton

//To render a component into the application you need to self close it </>, like linke 11 and line 15
//Make sure to import ALL pages AND Componenets to App.JS

//If you want to add different pages to the app, you put a router which will tell react that we want some routers in teh application. It shold be wrapped in all of your routes/pages.
//Switch tag is a component that is telling the app that we want to render a router/page at each time.



//In line 11, you can also do it this way
    //<navbar>
        //<Link to = "/"> Home </Link>
        //<Link to = "/about"> About </Link>
        //<Link to = "/profile"> Profile </Link>
    //</navbar>

//In line 12 and 17, it can be either <routes></routes> or switch..doesnt matter
//Lines 13-16 can be element= OR exact component   
