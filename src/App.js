import "./styles/main.css"
import sun from "./img/icons/sun.svg"
import moon from "./img/icons/moon.svg"

import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Project"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <div className="App">
    <Navbar />
	 <Home />
	 <Projects />
	 <Contacts />
    <Footer />
    </div>
  );
}

export default App;
