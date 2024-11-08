import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trust from "./components/Trust/Trust";
import Why from "./components/Why/Why";
import Explore from "./components/Explore/Explore";

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Why />
            <Trust />
            <Explore />
        </div>
    );
}

export default App;
